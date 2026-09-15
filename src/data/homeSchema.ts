/** 메인 페이지 구조화 데이터 (Google · Naver · AI 검색 인용용) */
export const homeJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.castingn.com/#organization",
      "name": "캐스팅엔",
      "alternateName": ["CastingN", "(주)캐스팅엔"],
      "url": "https://www.castingn.com",
      "email": "zeno@castingn.com",
      "telephone": "+82-1644-2653",
      "faxNumber": "+82-70-4032-2523",
      "taxID": "423-86-00075",
      "founder": { "@type": "Person", "name": "최준혁" },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressLocality": "인천광역시 부평구",
        "streetAddress": "대정로 66, 4층 408호(부평동, 다운타운일레븐)"
      },
      "sameAs": [
        "https://ko.wikipedia.org/wiki/캐스팅엔",
        "https://www.linkedin.com/company/castingn",
        "https://www.workmarket9.com/",
        "https://www.medihim.com/"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://zeno.im/#software",
      "name": "ZENO",
      "alternateName": ["제노", "캐스팅엔 제노", "업무마켓", "업무마켓9"],
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "구매·지출 관리(BSM, Source-to-Pay)",
      "operatingSystem": "Web, iOS, Android",
      "url": "https://zeno.im",
      "description": "ZENO(제노)는 캐스팅엔이 만든 AI 구매·지출 관리 솔루션입니다. 간접구매와 판관비를 하나의 시스템으로 모으고, 품목·결재·예산·계정·SLA·계약 여섯 가지 구매 규정을 시스템 규칙으로 심어 지출이 일어나기 전에 통제합니다. ERP를 교체하지 않고 그 위에서 작동합니다.",
      "publisher": { "@id": "https://www.castingn.com/#organization" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "KRW",
        "price": "0",
        "description": "기본 이용료와 제노를 통해 처리한 거래액에 연동되는 요금으로 구성됩니다. 거래액이 커질수록 적용 요율은 낮아지며, AI 기능은 도입 첫해 무료입니다. 정확한 견적은 비용절감 진단 후 안내합니다.",
        "url": "https://salesmap.kr/web-form/977ae222-c6ab-4073-9849-591af0775adc"
      },
      "featureList": [
        "구매규정 시스템화 (품목·전결·예산·계정·SLA·계약)",
        "승인 워크플로우 — 전결·합의·병렬 한국형 결재",
        "예산 통제 — 요청 시점 사전 차감과 초과 차단",
        "AI 인테이크 거버넌스 — 자연어 요청 자동 분류",
        "구매요청·발주 (P2P)",
        "소싱·계약 (S2C)",
        "입찰·역경매",
        "마켓플레이스 — 기존 공급사 유지 + 카탈로그 구매",
        "서비스 구매 / URL 구매",
        "세이빙 엔진 — Price·Demand·Waste·Specification·Contract Saving",
        "AI 에이전트 9종 · AI 툴 4종",
        "ERP·그룹웨어 연동, 전자세금계산서",
        "CFO 대시보드, 협력사 포털"
      ],
      "audience": {
        "@type": "BusinessAudience",
        "name": "임직원 300인 이상 기업의 CFO · 구매 임원",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 300 }
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://zeno.im/#website",
      "url": "https://zeno.im/",
      "name": "ZENO(제노)",
      "inLanguage": "ko-KR",
      "publisher": { "@id": "https://www.castingn.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://zeno.im/#webpage",
      "url": "https://zeno.im/",
      "name": "ZENO(제노) — AI 구매·지출 관리 솔루션 | 캐스팅엔",
      "description": "간접구매와 판관비를 하나로 모으고, 구매 규정을 시스템에 심습니다. 그렇게 줄어든 금액은 매출을 늘리지 않고도 영업이익으로 남습니다.",
      "isPartOf": { "@id": "https://zeno.im/#website" },
      "about": { "@id": "https://zeno.im/#software" },
      "inLanguage": "ko-KR",
      "primaryImageOfPage": "https://zeno.im/assets/og-image.png",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#hero-h", "#summary-h", "#summary .lead"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://zeno.im/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://zeno.im/" }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://zeno.im/#howto-onboarding",
      "name": "ZENO 도입 절차",
      "description": "제노 온보딩 팀이 네 가지 작업을 4~8주 안에 마치고 운영으로 넘겨 드립니다. 전산 개발은 필요하지 않습니다.",
      "totalTime": "P8W",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "지출 분석", "text": "회계·카드·청구 데이터를 수집하고 반복 거래와 누락 계약을 확인해 대상 지출 범위를 확정합니다." },
        { "@type": "HowToStep", "position": 2, "name": "품목 표준화", "text": "사내 품목명을 정리하고 표준품목 체계를 등록한 뒤 계정과목을 매핑합니다." },
        { "@type": "HowToStep", "position": 3, "name": "규정 분석과 세팅", "text": "규정집과 결재 체계를 검토해 결재선·예산·SLA를 등록하고 등록값을 검증합니다." },
        { "@type": "HowToStep", "position": 4, "name": "공급사 등록", "text": "거래 이력이 있는 공급사를 일괄 등록하고 계약·단가 이력을 이관한 뒤 공급사 포털을 안내합니다." }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://zeno.im/#saving-engine",
      "name": "ZENO 세이빙 엔진 5종",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Price Saving", "description": "과거단가·시장가·벤치마크를 비교해 목표단가와 예상 절감액을 제시합니다." },
        { "@type": "ListItem", "position": 2, "name": "Demand Saving", "description": "중복과 과다 수량을 차단하고 보유 자산과 재고를 먼저 확인합니다." },
        { "@type": "ListItem", "position": 3, "name": "Waste Saving", "description": "미사용 구독, 렌탈, 휴면 회선, 자동갱신 계약을 찾아냅니다." },
        { "@type": "ListItem", "position": 4, "name": "Specification Saving", "description": "과잉 사양을 검증하고 동등 사양 대안을 제시합니다." },
        { "@type": "ListItem", "position": 5, "name": "Contract Saving", "description": "자동갱신, 가격 인상률, 최소수량, 해지조건을 탐지해 대안을 제시합니다." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://zeno.im/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "ZENO(제노)는 어떤 솔루션인가요?", "acceptedAnswer": { "@type": "Answer", "text": "ZENO는 기업의 간접구매와 판관비를 하나의 시스템에서 관리하는 AI 구매·지출 관리 솔루션(BSM)입니다. 품목·전결·예산·계정·SLA·계약 여섯 가지 구매 규정을 시스템 규칙으로 심어 지출이 일어나기 전에 통제하고, 마켓플레이스와 소싱으로 실행하며, 세이빙 엔진으로 절감 성과를 검증합니다." } },
        { "@type": "Question", "name": "쓰고 있는 ERP나 전자결재와 제노는 무엇이 다릅니까?", "acceptedAnswer": { "@type": "Answer", "text": "제노는 기존 시스템을 대체하지 않고, 그 시스템들이 하지 않는 구간을 맡습니다. ERP 구매 모듈은 집행된 지출을 기록하고 결재하지만 제노는 집행 이전에 규정으로 거릅니다. 그룹웨어 전자결재는 올라온 문서를 승인하지만 제노는 금액과 품목에 따라 결재선 자체를 결정합니다. 구축형 구매 시스템은 대형 직접구매를 표준화하지만 제노는 간접구매 롱테일을 구축 없이 덮습니다. 법인카드·경비 관리는 이미 쓴 비용을 정산하지만 제노는 쓰기 전에 한도와 경로를 적용합니다. 제노는 ERP를 바꾸는 솔루션이 아니라, 지출이 발생하기 전 구간을 맡는 솔루션입니다." } },
        { "@type": "Question", "name": "영업 상담 없이 제품을 먼저 볼 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "가능합니다. 구매 6단계별 화면 설명, 기존 ERP·전자결재와의 차이, 기능 커버리지, 도입 절차는 홈페이지 본문에서 신청 없이 확인하실 수 있습니다. 제품 구조와 도입 절차를 정리한 ZENO 소개서는 상담 요청 없이 자료로 받아보실 수 있습니다. 구매 요청 한 건이 정산까지 가는 과정을 담은 제품 투어 영상은 준비 중입니다." } },
        { "@type": "Question", "name": "ERP를 바꿔야 하나요?", "acceptedAnswer": { "@type": "Answer", "text": "아닙니다. ERP는 지출을 기록하고, 제노는 지출 이전 단계에서 판단합니다. 제노는 ERP 위에서 작동합니다." } },
        { "@type": "Question", "name": "어떤 시스템과 연동되나요?", "acceptedAnswer": { "@type": "Answer", "text": "ERP와 그룹웨어, 전자세금계산서를 연동합니다. 사용 중인 시스템 목록을 주시면 연동 방식과 범위를 확인해 드립니다." } },
        { "@type": "Question", "name": "거래하던 공급사는 계속 쓸 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "그대로 쓰실 수 있습니다. 기존 공급사를 제노 안에 등록해 같은 규정과 이력 관리를 적용합니다." } },
        { "@type": "Question", "name": "공급사 등록은 누가 하나요?", "acceptedAnswer": { "@type": "Answer", "text": "온보딩 팀이 합니다. 거래 이력이 있는 공급사를 일괄 등록하고, 이후 신규 공급사는 요청 단계에서 추가됩니다." } },
        { "@type": "Question", "name": "기존 계약과 단가 이력은 옮길 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "옮길 수 있습니다. 계약서와 과거 구매 내역을 등록하면 기준단가 판단과 갱신 관리에 바로 쓰입니다." } },
        { "@type": "Question", "name": "구매 규정은 누가 등록하고 개정하나요?", "acceptedAnswer": { "@type": "Answer", "text": "온보딩 팀이 규정집을 함께 검토해 등록하고, 이후 개정은 담당자가 화면에서 직접 합니다." } },
        { "@type": "Question", "name": "AI가 구매를 알아서 해주는 건가요?", "acceptedAnswer": { "@type": "Answer", "text": "AI는 요청 분류, 공급사와 가격 후보 제시, 낭비 진단을 맡습니다. 검토와 승인, 최종 결정은 담당자가 합니다." } },
        { "@type": "Question", "name": "비용은 어떻게 책정되나요?", "acceptedAnswer": { "@type": "Answer", "text": "기본 이용료와, 제노를 통해 처리한 거래액에 연동되는 요금으로 구성됩니다. 거래액이 커질수록 적용 요율은 낮아집니다. AI 기능은 도입 첫해 무료입니다. 귀사 지출 규모 기준 견적은 진단 후 안내해 드립니다." } },
        { "@type": "Question", "name": "도입까지 얼마나 걸리나요?", "acceptedAnswer": { "@type": "Answer", "text": "지출 분석부터 부서 단위 적용까지 규모에 따라 4~8주입니다. 세팅은 제노 온보딩 팀이 함께 진행합니다. 전산 개발은 필요하지 않습니다." } },
        { "@type": "Question", "name": "절감은 얼마나 되나요?", "acceptedAnswer": { "@type": "Answer", "text": "기업의 품목 구성과 구매 방식에 따라 다릅니다. 도입고객 실측 기준 간접구매비 절감은 최대 14.2%였습니다(당사 검증 기준). 제노는 절감액을 미리 약속하지 않고, 도입 전 구매·지출 분석에서 절감 여지를 데이터로 먼저 확인한 뒤 도입 후 실측으로 검증합니다." } }
      ]
    }
  ]
}
;
