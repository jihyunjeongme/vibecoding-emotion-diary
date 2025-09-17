# 🎭 Vibe Coding - Emotion Diary

감정 일기장 프로젝트: 일상의 감정을 기록하고 시각화하는 웹 애플리케이션

## 🚀 프로젝트 개요

이 프로젝트는 사용자의 일상 감정을 기록하고 분석할 수 있는 디지털 감정 일기장입니다. 
현대적인 디자인 시스템과 반응형 UI를 통해 직관적이고 아름다운 사용자 경험을 제공합니다.

### 주요 특징

- 🎨 **체계적인 디자인 시스템**: Figma 기반의 완전한 색상 및 타이포그래피 토큰 시스템
- 🌓 **다크모드 지원**: 자동 시스템 테마 감지 및 완벽한 다크모드 구현
- 📱 **완전 반응형**: 모바일과 데스크톱 최적화된 반응형 디자인
- 🌍 **다국어 폰트**: 한글(Pretendard)과 영문(SUIT Variable) 최적화된 폰트 시스템
- ⚡ **최신 기술 스택**: Next.js 14 + TypeScript + CSS Variables

## 🛠 기술 스택

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Variables + CSS Modules
- **Fonts**: Pretendard (한글), SUIT Variable (영문)
- **Design System**: Figma 기반 토큰 시스템

## 🎨 디자인 시스템

### 색상 토큰 시스템
완전한 색상 팔레트와 시맨틱 토큰을 제공합니다.

```typescript
import { colors } from '@/commons/constants/color';

// 기본 색상 팔레트
colors.blue[60]        // #3A5CF3 (Primary)
colors.green[30]       // #12B75F (Success)
colors.red[30]         // #F03851 (Error)

// 시맨틱 색상
colors.semantic.primary           // 라이트모드 Primary
colors.semanticDark.primary       // 다크모드 Primary
```

### 타이포그래피 토큰 시스템
반응형과 다국어를 지원하는 완전한 타이포그래피 시스템입니다.

```typescript
import { typography } from '@/commons/constants/typography';

// 웹 헤드라인 (대형 제목)
typography.webHeadline.headline01  // 48px/60px
typography.webHeadline.headline02  // 36px/48px
typography.webHeadline.headline03  // 28px/36px

// 반응형 스타일 생성
const responsiveStyle = getResponsiveTypographyStyle(
  typography.headline.headline01,     // 데스크톱: 24px/32px
  typography.mobile.headline.headline01  // 모바일: 28px/36px
);
```

### CSS 변수 사용
모든 디자인 토큰은 CSS 변수로 사용 가능합니다.

```css
.emotion-card {
  /* 색상 토큰 */
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  
  /* 타이포그래피 토큰 */
  font-family: var(--font-family-korean);
  font-size: var(--title-title01-font-size);
  line-height: var(--title-title01-line-height);
  font-weight: var(--title-title01-font-weight);
}

/* 모바일 자동 적용 (768px 이하) */
@media (max-width: 768px) {
  .responsive-title {
    font-size: var(--mobile-headline-headline01-font-size);
  }
}
```

## 🚀 시작하기

### 설치

```bash
# 저장소 클론
git clone https://github.com/jihyunjeongme/vibecoding-emotion-diary.git
cd vibecoding-emotion-diary

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 글로벌 CSS 및 디자인 토큰
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx          # 홈 페이지
├── commons/               # 공통 상수 및 유틸리티
│   └── constants/         # 디자인 토큰
│       ├── color.ts       # 색상 토큰 시스템
│       ├── typography.ts  # 타이포그래피 토큰 시스템
│       └── prompts/       # 구현 프롬프트 아카이브
└── components/            # 재사용 가능한 컴포넌트 (예정)
```

## 🎯 디자인 토큰 사용 가이드

### 색상 사용
```typescript
// TypeScript에서
import { colors, semantic } from '@/commons/constants/color';

const buttonStyle = {
  backgroundColor: semantic.primary,     // #3A5CF3
  color: colors.gray.white,             // #FFFFFF
  border: `1px solid ${semantic.borderPrimary}`,
};

// CSS에서
.button {
  background-color: var(--color-primary);
  color: var(--gray-white);
  border: 1px solid var(--border-primary);
}
```

### 타이포그래피 사용
```typescript
// TypeScript에서
import { typography, getTypographyStyle } from '@/commons/constants/typography';

const titleStyle = getTypographyStyle(typography.title.title01);

// CSS에서
.diary-title {
  font-family: var(--font-family-korean);
  font-size: var(--title-title01-font-size);
  line-height: var(--title-title01-line-height);
  font-weight: var(--title-title01-font-weight);
}
```

## 🌟 주요 기능 (예정)

- [ ] 감정 기록 및 저장
- [ ] 감정 데이터 시각화
- [ ] 감정 패턴 분석
- [ ] 다크모드 토글
- [ ] 반응형 모바일 UI
- [ ] 감정 카테고리 관리

## 🎨 디자인 시스템 상세

### 색상 팔레트
- **Blue**: 10단계 (#F0F7FF ~ #0B2184) - Primary 색상
- **Gray**: 12단계 (#FFFFFF ~ #000000) - 텍스트, 배경, 보더
- **Red**: 6단계 (#FDD7DC ~ #850A1B) - 에러, 경고
- **Green**: 6단계 (#D3F3E0 ~ #084424) - 성공, 확인
- **Yellow**: 6단계 (#FFE499 ~ #B27D00) - 주의, 강조
- **Cool Gray**: 8단계 (#F8F8FA ~ #B0B3C4) - 보조 회색

### 타이포그래피 계층
- **Web Headlines**: 48px, 36px, 28px (대형 제목)
- **Headlines**: 24px, 22px, 20px (일반 제목)
- **Titles**: 18px, 16px, 14px (소제목)
- **Body**: 16px, 14px, 12px (본문)
- **Captions**: 12px, 10px, 8px (캡션, 라벨)

### 반응형 브레이크포인트
- **Desktop**: 769px 이상
- **Mobile**: 768px 이하

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 커밋 컨벤션

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경
refactor: 코드 리팩토링
test: 테스트 추가 또는 수정
chore: 빌드 프로세스 또는 보조 도구 변경
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 👨‍💻 개발자

**Jihyun Jeong** - [@jihyunjeongme](https://github.com/jihyunjeongme)

---

💙 **Vibe Coding**으로 만든 감정 일기장 - 당신의 감정을 기록하고 이해하세요.