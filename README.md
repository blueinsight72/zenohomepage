# ZENO 홈페이지

zeno.im 공식 홈페이지. Framer에서 이전한 정적 사이트입니다.
**Astro**로 빌드해 **Cloudflare Pages**에 배포합니다.

---

## 빠른 시작

```bash
npm install
npm run dev      # http://localhost:4321
```

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 (저장하면 즉시 반영) |
| `npm run build` | `dist/`에 정적 HTML 생성 |
| `npm run preview` | 빌드 결과물을 로컬에서 확인 |

---

## 구조

```
src/
  data/nav.ts          ← 메뉴·URL·페이지별 SEO를 모두 여기서 관리 (가장 중요)
  data/homeSchema.ts   ← 메인 페이지 구조화 데이터(JSON-LD)
  layouts/Base.astro   ← <head> SEO, 배경, GNB·푸터 삽입, 공통 스크립트
  components/
    Gnb.astro          ← 상단 메뉴 + 메가메뉴 + 모바일 드로어
    Footer.astro       ← 회사 정보 + Family Site
    StubPage.astro     ← 하위 34개 페이지 공통 틀
  pages/
    index.astro                      ← 메인
    about.astro                      ← 회사
    resource/report.astro            ← 벤치마크 리포트
    product/[category]/[slug].astro  ← 프로덕트 18개 자동 생성
    solution/[group]/[slug].astro    ← 솔루션 13개 자동 생성
  styles/global.css    ← 전체 스타일
public/
  robots.txt           ← AI 크롤러 허용 목록 포함
  llms.txt             ← AI 검색엔진용 평문 요약
  _headers             ← Cloudflare 캐시·보안 헤더
```

빌드하면 총 **35개 페이지**와 `sitemap-index.xml`이 자동 생성됩니다.

---

## 자주 하는 작업

### GNB 메뉴를 바꾸고 싶다

`src/data/nav.ts` **한 곳만** 고치면 됩니다.
메가메뉴, 모바일 드로어, 하위 페이지 라우팅, 사이트맵이 전부 따라 바뀝니다.

### 하위 페이지 본문을 채우고 싶다

지금 34개 하위 페이지는 GNB·푸터·고유 title·h1·구조화 데이터만 있는 골격입니다.
본문을 넣으려면 `StubPage`의 슬롯에 섹션을 추가하고 `hasContent`를 켜세요.

```astro
<StubPage group={group} leaf={leaf} sectionLabel="프로덕트" basePath="/product" hasContent={true}>
  <section>
    <div class="wrap">
      <h2>...</h2>
    </div>
  </section>
</StubPage>
```

특정 페이지만 완전히 따로 만들고 싶으면
`src/pages/product/control/policy-engine.astro`처럼 정적 파일을 만들면 됩니다.
정적 경로가 동적 경로보다 우선합니다.

### 페이지 제목·설명(SEO)을 고치고 싶다

`src/data/nav.ts`의 해당 항목에서 `title`, `description`, `h1`, `lead`를 고칩니다.
**title과 description은 페이지마다 반드시 달라야 합니다.**
(Framer 시절에는 34개 페이지의 title이 전부 같아서 개별 검색어로 잡히지 않았습니다.)

### 제품 화면 이미지를 넣고 싶다

지금은 `.slot` 플레이스홀더입니다. `public/images/`에 파일을 넣고
`<img src="/images/파일명.png" alt="설명" width="..." height="..." loading="lazy">`로 교체하세요.
`alt`는 SEO·접근성 모두에 필요하니 비우지 마세요.

---

## 배포 (Cloudflare Pages)

### 방법 A — Git 연동 (권장)

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**
3. 빌드 설정:
   | 항목 | 값 |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `22` (`.nvmrc`로 이미 지정됨) |
4. 배포 후 **Custom domains**에서 `zeno.im` 연결.

이후 `main`에 푸시할 때마다 자동 배포되고, PR마다 미리보기 URL이 생깁니다.

### 방법 B — 직접 업로드

```bash
npm run build
npx wrangler pages deploy dist --project-name=zeno-homepage
```

### 도메인 전환 시 주의

- 현재 zeno.im은 Framer가 서비스 중입니다. Cloudflare Pages에 배포해
  **미리보기 URL에서 충분히 확인한 뒤** DNS를 옮기세요.
- URL 경로는 Framer와 동일하게 유지했으므로 기존 색인과 백링크가 그대로 살아납니다.
- 전환 직후 할 일:
  - Google Search Console에서 `sitemap-index.xml` 제출
  - 네이버 서치어드바이저에서 사이트맵 재제출
  - `naver-site-verification` 메타태그는 그대로 유지됨 (`src/data/nav.ts`)

---

## SEO / AI 검색 대응

| 항목 | 상태 |
|---|---|
| 페이지별 고유 title | 35개 전부 고유 |
| 페이지별 고유 description | 35개 전부 고유 |
| h1 | 페이지당 정확히 1개 |
| canonical | 끝 슬래시 없이 통일 |
| 구조화 데이터 | Organization, SoftwareApplication, WebSite, WebPage, BreadcrumbList, HowTo, ItemList, FAQPage |
| sitemap | 빌드 시 자동 생성 |
| robots.txt | GPTBot·ClaudeBot·PerplexityBot·OAI-SearchBot 등 AI 크롤러 명시적 허용 |
| llms.txt | 제품 전체를 평문으로 요약 — AI 답변 인용용 |

`public/llms.txt`는 제품 내용이 바뀌면 같이 고쳐 주세요.
AI 검색이 사이트를 요약할 때 가장 먼저 읽는 파일입니다.

---

## 아직 남은 일

- [ ] 하위 34개 페이지 본문 (현재 골격만)
- [ ] 제품 화면 스크린샷 (현재 플레이스홀더)
- [ ] 도입 사례 3건 실제 내용 (현재 "내용 대기")
- [ ] 고객사 로고
- [ ] OG 이미지를 자체 호스팅으로 교체 (현재 framerusercontent.com 참조)
- [ ] 배경 영상을 자체 호스팅으로 교체 (현재 framerusercontent.com 참조)
