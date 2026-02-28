# 카원 그룹 통합 홈페이지

카원 그룹 계열사 9개의 홈페이지를 하나의 프로젝트에서 관리하는 멀티 테넌트 기업 웹사이트입니다.

## 기술 스택

| 항목 | 사용 기술 |
|------|-----------|
| 프레임워크 | React 18 |
| 빌드 도구 | Vite 5 |
| 라우팅 | React Router DOM v6 |
| 스타일링 | Styled Components v6 |
| 애니메이션 | Framer Motion, AOS |
| 코드 품질 | ESLint, Prettier |

## 계열사 구성

| 계열사 | 경로 | 사업 분야 |
|--------|------|-----------|
| 홈 (카원 그룹) | `/` | 그룹 소개 |
| (주)자동차환경 | `/ce` | 폐기물 수집·운반·중간처리 |
| 카원(유) 1공장 | `/carone` | 폐기물 수집·운반·재활용 |
| 카원(유) 2공장 | `/carone2` | 용기류 파쇄·분쇄·재활용 |
| (주)에스지산업 | `/sg` | 폐유 재활용·이온정제유 생산 |
| (주)토탈 | `/total` | 산업폐기물 소각·재활용 |
| (주)세명인텍 | `/si` | 세정·준설·관로 청소 |
| (주)황지 | `/hj` | 사업장폐기물 매립처분 |
| (주)에너지스토리 | `/es` | 액상폐기물 재활용 |

## 프로젝트 구조

```
src/
├── components/       # 공통 컴포넌트 (Header, Footer, Hero 등)
├── pages/            # 계열사별 페이지
├── constants/        # 콘텐츠 데이터 (텍스트, 이미지, 네비게이션)
├── hooks/            # 커스텀 훅
├── styles/           # 테마, 전역 스타일, 미디어 쿼리 유틸
├── assets/           # 이미지, 아이콘, 폰트, 영상
├── Router/           # 계열사별 라우트 설정
├── App.jsx
└── main.jsx
```

### 콘텐츠 관리

모든 텍스트·이미지·네비게이션 데이터는 `src/constants/`에서 중앙 관리합니다.

| 파일 | 역할 |
|------|------|
| `GNB_CONTENTS.js` | 상단 네비게이션 |
| `LNB_CONTENTS.js` | 사이드 네비게이션 |
| `HERO_IMAGES.js` | 히어로 이미지 매핑 |
| `HERO_VIDEOS.js` | 히어로 영상 매핑 |
| `MAIN_ARTICLE_CONTENTS.js` | 메인 페이지 아티클 |
| `FOOTER_CONTENTS.js` | 푸터 회사 정보 |
| `MAP_CONTENTS.js` | 오시는 길 정보 |
| `WELCOME_BOX_CONTENTS.js` | 회사 소개 문구 |
| `BUSINESS_PARTNER_CONTENTS.js` | 주요 거래처 |

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 반응형 브레이크포인트

| 구분 | 기준 |
|------|------|
| 모바일 | `~ 767px` |
| 태블릿 | `768px ~ 1023px` |
| 데스크탑 | `1024px ~` |
