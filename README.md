# 🎭 Vibe Coding - Emotion Diary

An emotion diary project: A web application for recording and visualizing daily emotions

## 🚀 Project Overview

This project is a digital emotion diary that allows users to record and analyze their daily emotions.
It provides an intuitive and beautiful user experience through a modern design system and responsive UI.

### Key Features

- 🎨 **Systematic Design System**: Complete color and typography token system based on Figma
- 🌓 **Dark Mode Support**: Automatic system theme detection and perfect dark mode implementation
- 📱 **Fully Responsive**: Mobile and desktop optimized responsive design
- 🌍 **Multilingual Fonts**: Optimized font system for Korean (Pretendard) and English (SUIT Variable)
- ⚡ **Modern Tech Stack**: Next.js 14 + TypeScript + CSS Variables

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Variables + CSS Modules
- **Fonts**: Pretendard (Korean), SUIT Variable (English)
- **Design System**: Figma-based token system

## 🎨 Design System

### Color Token System

Provides a complete color palette and semantic tokens.

```typescript
import { colors } from "@/commons/constants/color";

// Basic color palette
colors.blue[60]; // #3A5CF3 (Primary)
colors.green[30]; // #12B75F (Success)
colors.red[30]; // #F03851 (Error)

// Semantic colors
colors.semantic.primary; // Light mode Primary
colors.semanticDark.primary; // Dark mode Primary
```

### Typography Token System

A complete typography system supporting responsive and multilingual features.

```typescript
import { typography } from "@/commons/constants/typography";

// Web Headlines (Large titles)
typography.webHeadline.headline01; // 48px/60px
typography.webHeadline.headline02; // 36px/48px
typography.webHeadline.headline03; // 28px/36px

// Responsive style generation
const responsiveStyle = getResponsiveTypographyStyle(
  typography.headline.headline01, // Desktop: 24px/32px
  typography.mobile.headline.headline01 // Mobile: 28px/36px
);
```

### CSS Variables Usage

All design tokens are available as CSS variables.

```css
.emotion-card {
  /* Color tokens */
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);

  /* Typography tokens */
  font-family: var(--font-family-korean);
  font-size: var(--title-title01-font-size);
  line-height: var(--title-title01-line-height);
  font-weight: var(--title-title01-font-weight);
}

/* Mobile auto-applied (768px and below) */
@media (max-width: 768px) {
  .responsive-title {
    font-size: var(--mobile-headline-headline01-font-size);
  }
}
```

## 🚀 Getting Started

### Installation

```bash
# Clone repository
git clone https://github.com/jihyunjeongme/vibecoding-emotion-diary.git
cd vibecoding-emotion-diary

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Production build
npm run build

# Run build result
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global CSS and design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── commons/               # Common constants and utilities
│   └── constants/         # Design tokens
│       ├── color.ts       # Color token system
│       ├── typography.ts  # Typography token system
│       └── prompts/       # Implementation prompt archive
└── components/            # Reusable components (planned)
```

## 🎯 Design Token Usage Guide

### Color Usage

```typescript
// In TypeScript
import { colors, semantic } from "@/commons/constants/color";

const buttonStyle = {
  backgroundColor: semantic.primary, // #3A5CF3
  color: colors.gray.white, // #FFFFFF
  border: `1px solid ${semantic.borderPrimary}`,
};

// In CSS
.button {
  background-color: var(--color-primary);
  color: var(--gray-white);
  border: 1px solid var(--border-primary);
}
```

### Typography Usage

```typescript
// In TypeScript
import { typography, getTypographyStyle } from "@/commons/constants/typography";

const titleStyle = getTypographyStyle(typography.title.title01);

// In CSS
.diary-title {
  font-family: var(--font-family-korean);
  font-size: var(--title-title01-font-size);
  line-height: var(--title-title01-line-height);
  font-weight: var(--title-title01-font-weight);
}
```

## 🌟 Main Features (Planned)

- [ ] Emotion recording and storage
- [ ] Emotion data visualization
- [ ] Emotion pattern analysis
- [ ] Dark mode toggle
- [ ] Responsive mobile UI
- [ ] Emotion category management

## 🎨 Design System Details

### Color Palette

- **Blue**: 10 levels (#F0F7FF ~ #0B2184) - Primary colors
- **Gray**: 12 levels (#FFFFFF ~ #000000) - Text, background, border
- **Red**: 6 levels (#FDD7DC ~ #850A1B) - Error, warning
- **Green**: 6 levels (#D3F3E0 ~ #084424) - Success, confirmation
- **Yellow**: 6 levels (#FFE499 ~ #B27D00) - Caution, emphasis
- **Cool Gray**: 8 levels (#F8F8FA ~ #B0B3C4) - Secondary gray

### Typography Hierarchy

- **Web Headlines**: 48px, 36px, 28px (Large titles)
- **Headlines**: 24px, 22px, 20px (Regular titles)
- **Titles**: 18px, 16px, 14px (Subtitles)
- **Body**: 16px, 14px, 12px (Body text)
- **Captions**: 12px, 10px, 8px (Captions, labels)

### Responsive Breakpoints

- **Desktop**: 769px and above
- **Mobile**: 768px and below

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) rules.

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Change code style
refactor: Refactor code
test: Add or modify tests
chore: Change build process or auxiliary tools
```

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more details.

## 👨‍💻 Developer

**Jihyun Jeong** - [@jihyunjeongme](https://github.com/jihyunjeongme)

---

💙 **Emotion Diary** made with **Vibe Coding** - Record and understand your emotions.