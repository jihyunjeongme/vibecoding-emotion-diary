/**
 * 타이포그래피 토큰 시스템
 * 피그마 디자인 시스템에서 추출한 typography 값들을 토큰화하여 관리
 * 한글/영문 분기, 모바일/데스크톱 분기 지원
 */

// 폰트 패밀리 정의
export const fontFamily = {
  // 한글: Pretendard 폰트
  korean:
    "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",

  // 영문/숫자: SUIT 폰트
  english:
    "SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",

  // 기본 (한글 우선)
  default:
    "Pretendard, SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
} as const;

// 폰트 웨이트 정의
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// 기본 타이포그래피 스타일 인터페이스
interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily: string;
}

// 웹 헤드라인 (데스크톱)
export const webHeadline = {
  headline01: {
    fontSize: 48,
    lineHeight: 60,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
  headline02: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
  headline03: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
} as const;

// 헤드라인
export const headline = {
  headline01: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.korean,
  },
  headline02: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: fontWeight.extrabold,
    fontFamily: fontFamily.korean,
  },
  headline03: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.korean,
  },
} as const;

// 타이틀
export const title = {
  title01: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.korean,
  },
  title02: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.korean,
  },
  title03: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.korean,
  },
  subtitle01: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
  subtitle02: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
} as const;

// 본문 (Medium Weight)
export const body = {
  body01: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeight.medium,
    fontFamily: fontFamily.korean,
  },
  body02_m: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: fontWeight.medium,
    fontFamily: fontFamily.korean,
  },
  body03: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: fontWeight.medium,
    fontFamily: fontFamily.korean,
  },
} as const;

// 본문 (Regular Weight) - 미정으로 표시된 스타일들
export const bodyRegular = {
  body01: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.korean,
  },
  body02_s: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.korean,
  },
  body03: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.korean,
  },
} as const;

// 캡션
export const caption = {
  caption01: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
  caption02_m: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
  caption02_s: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: fontWeight.medium,
    fontFamily: fontFamily.korean,
  },
  caption03: {
    fontSize: 8,
    lineHeight: 10,
    fontWeight: fontWeight.semibold,
    fontFamily: fontFamily.korean,
  },
} as const;

// 모바일용 타이포그래피 (반응형 대응)
export const mobile = {
  // 모바일 헤드라인 (웹보다 작게)
  headline: {
    headline01: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.korean,
    },
    headline02: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.korean,
    },
    headline03: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.korean,
    },
  },

  // 모바일 타이틀
  title: {
    title01: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.korean,
    },
    title02: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.korean,
    },
    subtitle01: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.korean,
    },
  },

  // 모바일 본문
  body: {
    body01: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.korean,
    },
    body02: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.korean,
    },
  },

  // 모바일 캡션
  caption: {
    caption01: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.korean,
    },
    caption02: {
      fontSize: 8,
      lineHeight: 10,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.korean,
    },
  },
} as const;

// 영문 전용 타이포그래피 (SUIT 폰트 사용)
export const english = {
  // 웹 헤드라인
  webHeadline: {
    headline01: {
      fontSize: 48,
      lineHeight: 60,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.english,
    },
    headline02: {
      fontSize: 36,
      lineHeight: 48,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.english,
    },
    headline03: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.english,
    },
  },

  // 헤드라인
  headline: {
    headline01: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.english,
    },
    headline02: {
      fontSize: 22,
      lineHeight: 30,
      fontWeight: fontWeight.extrabold,
      fontFamily: fontFamily.english,
    },
    headline03: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.english,
    },
  },

  // 타이틀
  title: {
    title01: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.english,
    },
    title02: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.english,
    },
    title03: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: fontWeight.bold,
      fontFamily: fontFamily.english,
    },
  },

  // 본문
  body: {
    body01: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.english,
    },
    body02: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.english,
    },
    body03: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: fontWeight.medium,
      fontFamily: fontFamily.english,
    },
  },

  // 캡션
  caption: {
    caption01: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.english,
    },
    caption02: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: fontWeight.semibold,
      fontFamily: fontFamily.english,
    },
  },
} as const;

// CSS 변수명 매핑을 위한 헬퍼 함수
const createCSSVariables = (styles: Record<string, TypographyStyle>, prefix: string) => {
  const cssVars: Record<string, string> = {};

  Object.entries(styles).forEach(([key, style]) => {
    cssVars[`${prefix}-${key}-font-size`] = `${style.fontSize}px`;
    cssVars[`${prefix}-${key}-line-height`] = `${style.lineHeight}px`;
    cssVars[`${prefix}-${key}-font-weight`] = style.fontWeight.toString();
    cssVars[`${prefix}-${key}-font-family`] = style.fontFamily;
  });

  return cssVars;
};

// CSS 변수 생성
export const cssVariables = {
  // 폰트 패밀리
  "font-family-korean": fontFamily.korean,
  "font-family-english": fontFamily.english,
  "font-family-default": fontFamily.default,

  // 폰트 웨이트
  "font-weight-regular": fontWeight.regular.toString(),
  "font-weight-medium": fontWeight.medium.toString(),
  "font-weight-semibold": fontWeight.semibold.toString(),
  "font-weight-bold": fontWeight.bold.toString(),
  "font-weight-extrabold": fontWeight.extrabold.toString(),

  // 웹 헤드라인
  ...createCSSVariables(webHeadline, "web-headline"),

  // 헤드라인
  ...createCSSVariables(headline, "headline"),

  // 타이틀
  ...createCSSVariables(title, "title"),

  // 본문
  ...createCSSVariables(body, "body"),
  ...createCSSVariables(bodyRegular, "body-regular"),

  // 캡션
  ...createCSSVariables(caption, "caption"),
} as const;

// 모바일 CSS 변수
export const cssVariablesMobile = {
  // 모바일 헤드라인
  ...createCSSVariables(mobile.headline, "mobile-headline"),

  // 모바일 타이틀
  ...createCSSVariables(mobile.title, "mobile-title"),

  // 모바일 본문
  ...createCSSVariables(mobile.body, "mobile-body"),

  // 모바일 캡션
  ...createCSSVariables(mobile.caption, "mobile-caption"),
} as const;

// 타입 정의
export type FontFamily = keyof typeof fontFamily;
export type FontWeight = keyof typeof fontWeight;
export type WebHeadlineStyle = keyof typeof webHeadline;
export type HeadlineStyle = keyof typeof headline;
export type TitleStyle = keyof typeof title;
export type BodyStyle = keyof typeof body;
export type BodyRegularStyle = keyof typeof bodyRegular;
export type CaptionStyle = keyof typeof caption;
export type MobileHeadlineStyle = keyof typeof mobile.headline;
export type MobileTitleStyle = keyof typeof mobile.title;
export type MobileBodyStyle = keyof typeof mobile.body;
export type MobileCaptionStyle = keyof typeof mobile.caption;
export type EnglishWebHeadlineStyle = keyof typeof english.webHeadline;
export type EnglishHeadlineStyle = keyof typeof english.headline;
export type EnglishTitleStyle = keyof typeof english.title;
export type EnglishBodyStyle = keyof typeof english.body;
export type EnglishCaptionStyle = keyof typeof english.caption;

// 헬퍼 함수: 타이포그래피 스타일을 CSS 객체로 변환
export const getTypographyStyle = (style: TypographyStyle) => ({
  fontSize: `${style.fontSize}px`,
  lineHeight: `${style.lineHeight}px`,
  fontWeight: style.fontWeight,
  fontFamily: style.fontFamily,
});

// 헬퍼 함수: 반응형 타이포그래피 스타일 생성
export const getResponsiveTypographyStyle = (
  desktopStyle: TypographyStyle,
  mobileStyle: TypographyStyle
) => ({
  fontSize: `${desktopStyle.fontSize}px`,
  lineHeight: `${desktopStyle.lineHeight}px`,
  fontWeight: desktopStyle.fontWeight,
  fontFamily: desktopStyle.fontFamily,
  "@media (max-width: 768px)": {
    fontSize: `${mobileStyle.fontSize}px`,
    lineHeight: `${mobileStyle.lineHeight}px`,
    fontWeight: mobileStyle.fontWeight,
    fontFamily: mobileStyle.fontFamily,
  },
});

// 타이포그래피 토큰 전체 객체 내보내기
export const typography = {
  fontFamily,
  fontWeight,
  webHeadline,
  headline,
  title,
  body,
  bodyRegular,
  caption,
  mobile,
  english,
  cssVariables,
  cssVariablesMobile,
  getTypographyStyle,
  getResponsiveTypographyStyle,
} as const;

export default typography;
