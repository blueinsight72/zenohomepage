# 배포 안내 (개발팀용)

이 저장소는 **목업이 아니라 완성된 정적 사이트**입니다.
빌드하면 바로 서비스 가능한 HTML이 나옵니다. 재구현하지 마십시오.

---

## 한 줄 요약

```bash
npm ci && npm run build   # → dist/ 에 HTML 35개 생성
```

`dist/` 폴더를 정적 호스팅에 그대로 올리면 끝입니다.
**서버 런타임·DB·API 서버가 필요 없습니다.**

| 항목 | 값 |
|---|---|
| 프레임워크 | Astro 5 (정적 출력) |
| Node | 22 (`.nvmrc`) |
| 빌드 명령 | `npm run build` |
| 산출 디렉터리 | `dist` |
| 런타임 의존성 | 없음 |
| 백엔드 | 없음 — 문의 폼은 외부 세일즈맵으로 전송 |
| 페이지 수 | 35 (메인 1 + 하위 33 + 404) |
| 총 용량 | 약 3.0MB (배경 영상 1.8MB 포함) |

---

## AWS (S3 + CloudFront) 배포 시 반드시 처리할 것

### 1. 디렉터리 인덱스 해석 — 이걸 안 하면 메인 빼고 전부 404

빌드 결과가 `dist/about/index.html` 형태입니다.
S3 정적 호스팅은 `/about` 요청에 `index.html`을 자동으로 붙여주지 않습니다.

**CloudFront Function (viewer request)** 을 붙이십시오.

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
```

이렇게 하면 `/product/control/policy-engine` 이 정상 응답합니다.
**정규 URL(canonical)을 끝 슬래시 없이 발행하고 있으므로 이 형태를 유지해야 합니다.**

### 2. 404 페이지

CloudFront 사용자 지정 오류 응답에서
`404 → /404.html`, 응답 코드 `404`로 설정하십시오.
(200으로 돌리면 검색엔진이 없는 페이지를 색인합니다.)

### 3. 캐시 헤더

저장소의 `public/_headers`는 **Cloudflare Pages 전용이라 AWS에서는 동작하지 않습니다.**
아래 기준을 CloudFront 캐시 정책이나 S3 메타데이터로 다시 설정해 주십시오.

| 경로 | Cache-Control |
|---|---|
| `/_astro/*` | `public, max-age=31536000, immutable` (파일명에 해시 포함) |
| `/assets/*` | `public, max-age=604800` |
| `*.html` | `public, max-age=0, must-revalidate` |
| `/llms.txt`, `/robots.txt` | `public, max-age=3600` |

배포할 때마다 HTML은 무효화(invalidation)해 주십시오. `/_astro/*`는 불필요합니다.

### 4. Content-Type

`llms.txt`, `robots.txt`는 `text/plain; charset=utf-8`로 내려가야 합니다.
한글이 포함돼 있어 charset이 없으면 깨집니다.

### 5. 인증서 · 도메인

- ACM 인증서는 **us-east-1**에서 발급해야 CloudFront에 붙습니다
- `zeno.im`, `www.zeno.im` 둘 다 포함하고 하나로 301 통일하십시오

---

## 배포 전 확인

현재 zeno.im은 **Framer가 서비스 중**입니다.
스테이징에서 아래를 확인한 뒤 DNS를 전환하십시오.

- [ ] 메인 페이지 GNB 메가메뉴 3개가 열리는가
- [ ] `/product/control/policy-engine` 등 하위 경로가 404 없이 열리는가
- [ ] 없는 경로(`/nope`)가 404.html을 404 코드로 반환하는가
- [ ] `/robots.txt`, `/llms.txt`, `/sitemap-index.xml` 이 열리는가
- [ ] 한글이 깨지지 않는가
- [ ] 모바일에서 햄버거 메뉴가 열리는가

### DNS 전환 직후

- [ ] Google Search Console에 `sitemap-index.xml` 제출
- [ ] 네이버 서치어드바이저에 사이트맵 재제출
- [ ] 기존 URL 경로를 Framer와 동일하게 유지했으므로 리디렉션은 불필요

---

## Vercel을 쓸 경우

설정이 더 단순합니다. 위의 1·2·3번을 Vercel이 알아서 처리합니다.

1. 저장소 연결
2. Framework Preset: **Astro** (자동 인식)
3. 끝

스테이징용으로 Vercel을 쓰고 운영은 AWS로 가는 구성도 가능합니다.

---

## 콘텐츠 수정 (개발팀 작업 아님)

마케팅에서 직접 수정합니다. 개발팀 배포 파이프라인만 돌아가면 됩니다.

| 무엇을 | 어디를 |
|---|---|
| GNB 메뉴, 하위 페이지 제목·설명 | `src/data/nav.ts` |
| 메인 페이지 문구 | `src/pages/index.astro` |
| 회사 정보 | `src/components/Footer.astro`, `src/pages/about.astro` |
| 폼 주소 | `src/data/nav.ts` 의 `CTA` |
| AI 검색용 요약 | `public/llms.txt` |

**주의 — 페이지마다 title과 description은 반드시 서로 달라야 합니다.**
(Framer 시절 34개 페이지의 title이 전부 같아서 하위 페이지가 검색에 잡히지 않았습니다.)
