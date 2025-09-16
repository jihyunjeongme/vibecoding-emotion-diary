/**
 * 색상 토큰 시스템
 * 피그마 디자인 시스템에서 추출한 색상 값들을 토큰화하여 관리
 * 다크모드를 포함한 모든 색상 변수를 제공
 */

// 기본 색상 팔레트 (Blue)
export const blue = {
  5: "#F0F7FF",
  10: "#DBEEFF",
  20: "#BDDBFF",
  30: "#93BEFF",
  40: "#6DA5FA", // System color
  50: "#497CFF",
  60: "#3A5CF3", // System color
  70: "#274AE1",
  80: "#1530A6",
  90: "#0B2184",
} as const;

// 그레이스케일 색상 팔레트
export const gray = {
  white: "#FFFFFF",
  5: "#F2F2F2",
  10: "#E4E4E4",
  20: "#D4D3D3",
  30: "#C7C7C7",
  40: "#ABABAB",
  50: "#919191",
  60: "#777777",
  70: "#5F5F5F",
  80: "#333333",
  90: "#1C1C1C",
  black: "#000000",
} as const;

// 레드 색상 팔레트
export const red = {
  5: "#FDD7DC",
  10: "#F797A4",
  20: "#F4677A",
  30: "#F03851", // Error color
  40: "#E4112E",
  50: "#B40E24",
  60: "#850A1B",
} as const;

// 그린 색상 팔레트
export const green = {
  5: "#D3F3E0",
  10: "#92E6B9",
  20: "#15D66F",
  30: "#12B75F", // Success color
  40: "#109C51",
  50: "#0E723C",
  60: "#084424",
} as const;

// 옐로우 색상 팔레트
export const yellow = {
  5: "#FFE499",
  10: "#FFD666",
  20: "#FFC933",
  30: "#FFB300",
  40: "#EBA500",
  50: "#D69600",
  60: "#B27D00",
} as const;

// 쿨 그레이 색상 팔레트
export const coolGray = {
  1: "#F8F8FA",
  5: "#F6F6F9",
  10: "#EDEEF2",
  20: "#DDDFE5",
  30: "#D2D4DD",
  40: "#C7C9D5",
  50: "#BBBECD",
  60: "#B0B3C4",
} as const;

// 시맨틱 색상 토큰
export const semantic = {
  // 시스템 색상
  primary: blue[60], // #3A5CF3
  primaryLight: blue[40], // #6DA5FA

  // 상태 색상
  success: green[30], // #12B75F
  error: red[30], // #F03851
  warning: yellow[30], // #FFB300

  // 텍스트 색상 (라이트 모드)
  textPrimary: gray[90], // #1C1C1C
  textSecondary: gray[60], // #777777
  textTertiary: gray[50], // #919191
  textDisabled: gray[40], // #ABABAB

  // 배경 색상 (라이트 모드)
  backgroundPrimary: gray.white, // #FFFFFF
  backgroundSecondary: gray[5], // #F2F2F2
  backgroundTertiary: gray[10], // #E4E4E4

  // 보더 색상 (라이트 모드)
  borderPrimary: gray[20], // #D4D3D3
  borderSecondary: gray[10], // #E4E4E4
} as const;

// 다크모드 시맨틱 색상 토큰
export const semanticDark = {
  // 시스템 색상 (다크모드에서도 동일)
  primary: blue[60], // #3A5CF3
  primaryLight: blue[40], // #6DA5FA

  // 상태 색상 (다크모드에서도 동일)
  success: green[30], // #12B75F
  error: red[30], // #F03851
  warning: yellow[30], // #FFB300

  // 텍스트 색상 (다크 모드)
  textPrimary: gray.white, // #FFFFFF
  textSecondary: gray[10], // #E4E4E4
  textTertiary: gray[30], // #C7C7C7
  textDisabled: gray[50], // #919191

  // 배경 색상 (다크 모드)
  backgroundPrimary: gray.black, // #000000
  backgroundSecondary: gray[90], // #1C1C1C
  backgroundTertiary: gray[80], // #333333

  // 보더 색상 (다크 모드)
  borderPrimary: gray[70], // #5F5F5F
  borderSecondary: gray[80], // #333333
} as const;

// 그라디언트 색상
export const gradient = {
  // Primary Gradient
  primary: "linear-gradient(135deg, #6DA5FA 0%, #92EAF5 100%)",

  // Skeleton Gradient (로딩 애니메이션용)
  skeleton: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 48.5%, transparent 100%)",
} as const;

// CSS 변수명 매핑 (camelCase -> kebab-case)
export const cssVariables = {
  // Blue colors
  "blue-5": blue[5],
  "blue-10": blue[10],
  "blue-20": blue[20],
  "blue-30": blue[30],
  "blue-40": blue[40],
  "blue-50": blue[50],
  "blue-60": blue[60],
  "blue-70": blue[70],
  "blue-80": blue[80],
  "blue-90": blue[90],

  // Gray colors
  "gray-white": gray.white,
  "gray-5": gray[5],
  "gray-10": gray[10],
  "gray-20": gray[20],
  "gray-30": gray[30],
  "gray-40": gray[40],
  "gray-50": gray[50],
  "gray-60": gray[60],
  "gray-70": gray[70],
  "gray-80": gray[80],
  "gray-90": gray[90],
  "gray-black": gray.black,

  // Red colors
  "red-5": red[5],
  "red-10": red[10],
  "red-20": red[20],
  "red-30": red[30],
  "red-40": red[40],
  "red-50": red[50],
  "red-60": red[60],

  // Green colors
  "green-5": green[5],
  "green-10": green[10],
  "green-20": green[20],
  "green-30": green[30],
  "green-40": green[40],
  "green-50": green[50],
  "green-60": green[60],

  // Yellow colors
  "yellow-5": yellow[5],
  "yellow-10": yellow[10],
  "yellow-20": yellow[20],
  "yellow-30": yellow[30],
  "yellow-40": yellow[40],
  "yellow-50": yellow[50],
  "yellow-60": yellow[60],

  // Cool Gray colors
  "cool-gray-1": coolGray[1],
  "cool-gray-5": coolGray[5],
  "cool-gray-10": coolGray[10],
  "cool-gray-20": coolGray[20],
  "cool-gray-30": coolGray[30],
  "cool-gray-40": coolGray[40],
  "cool-gray-50": coolGray[50],
  "cool-gray-60": coolGray[60],

  // Semantic colors (Light mode)
  "color-primary": semantic.primary,
  "color-primary-light": semantic.primaryLight,
  "color-success": semantic.success,
  "color-error": semantic.error,
  "color-warning": semantic.warning,
  "text-primary": semantic.textPrimary,
  "text-secondary": semantic.textSecondary,
  "text-tertiary": semantic.textTertiary,
  "text-disabled": semantic.textDisabled,
  "background-primary": semantic.backgroundPrimary,
  "background-secondary": semantic.backgroundSecondary,
  "background-tertiary": semantic.backgroundTertiary,
  "border-primary": semantic.borderPrimary,
  "border-secondary": semantic.borderSecondary,

  // Gradients
  "gradient-primary": gradient.primary,
  "gradient-skeleton": gradient.skeleton,
} as const;

// 다크모드 CSS 변수명 매핑
export const cssVariablesDark = {
  // Semantic colors (Dark mode) - 기본 색상은 동일하므로 시맨틱만 오버라이드
  "color-primary": semanticDark.primary,
  "color-primary-light": semanticDark.primaryLight,
  "color-success": semanticDark.success,
  "color-error": semanticDark.error,
  "color-warning": semanticDark.warning,
  "text-primary": semanticDark.textPrimary,
  "text-secondary": semanticDark.textSecondary,
  "text-tertiary": semanticDark.textTertiary,
  "text-disabled": semanticDark.textDisabled,
  "background-primary": semanticDark.backgroundPrimary,
  "background-secondary": semanticDark.backgroundSecondary,
  "background-tertiary": semanticDark.backgroundTertiary,
  "border-primary": semanticDark.borderPrimary,
  "border-secondary": semanticDark.borderSecondary,
} as const;

// 타입 정의
export type BlueColor = keyof typeof blue;
export type GrayColor = keyof typeof gray;
export type RedColor = keyof typeof red;
export type GreenColor = keyof typeof green;
export type YellowColor = keyof typeof yellow;
export type CoolGrayColor = keyof typeof coolGray;
export type SemanticColor = keyof typeof semantic;
export type GradientColor = keyof typeof gradient;
export type CssVariable = keyof typeof cssVariables;
export type CssVariableDark = keyof typeof cssVariablesDark;

// 색상 토큰 전체 객체 내보내기
export const colors = {
  blue,
  gray,
  red,
  green,
  yellow,
  coolGray,
  semantic,
  semanticDark,
  gradient,
  cssVariables,
  cssVariablesDark,
} as const;

export default colors;
