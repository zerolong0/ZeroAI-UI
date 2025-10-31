# ZeroAI-UI v5.1.0

<div align="center">

![ZeroAI-UI](https://img.shields.io/badge/ZeroAI--UI-v5.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Framework](https://img.shields.io/badge/Framework-Agnostic-purple)

**Framework-Agnostic AI-Native Design System**

*Design Tokens + Specifications. Works with ANY framework.*

[Design Tokens](./tokens) · [Integration Guides](./guidelines) · [Documentation](./docs) · [SKILL.md](./SKILL.md)

</div>

---

## 🎯 What is ZeroAI-UI v5.1.0?

**ZeroAI-UI v5.1.0** is a **lightweight, framework-agnostic design system** for AI-native products. It provides **Design Tokens** and **design specifications** that work with any frontend framework.

```
ZeroAI-UI v5.1.0 = Design Tokens + Decision Rules
Your Framework = Component Implementation (Taro, uni-app, React, Vue, Flutter)

Result = Framework Components + ZeroAI-UI Design Style
```

### What Changed from v4.x?

| v4.x (Component Library) | **v5.0 (Design System)** |
|--------------------------|--------------------------|
| 60+ Vanilla JS components | ✅ Design Tokens only |
| Framework-specific | ✅ Framework-agnostic |
| High maintenance cost | ✅ 90% less code |
| Becomes obsolete | ✅ Works forever |

**Core Philosophy Shift**:
- ❌ Old: "Here's a pre-built Button component" → Doesn't work with Taro/uni-app
- ✅ New: "Here's how buttons should look (tokens + rules)" → Apply to ANY framework

---

## ✨ Key Features

### 🎨 Three-Layer Visual System

Visually distinguish between human actions, AI content, and collaboration:

```css
/* Human Layer: User actions (solid blue) */
.save-button {
  background: var(--human-primary);  /* #737373 */
}

/* AI Layer: AI-generated content (solid orange - Taobao Orange) */
.ai-message {
  background: var(--ai-primary);  /* #FF6600 */
  font-family: var(--font-family-ai);
}

/* Collaboration Layer: Human-AI co-creation (solid blend of blue and orange) */
.collab-button {
  background: var(--collaboration-primary);  /* #FF7A45 */
}
```

### 📦 Design Tokens in 3 Formats

```
tokens/
├── design-tokens.json      # JSON format (for build tools)
├── css-variables.css       # CSS Custom Properties (any web framework)
└── tailwind.config.js      # Tailwind configuration (Taro/uni-app)
```

### 🚀 Framework Integration Guides

```
guidelines/
├── taro-integration.md     # Taro 4.0 (React + TypeScript)
└── uniapp-integration.md   # uni-app (Vue3 + TypeScript)
```

**Supported Frameworks**:
- ✅ Taro 4.0 (React + TypeScript)
- ✅ uni-app (Vue3 + TypeScript)
- ✅ React / Next.js
- ✅ Vue / Nuxt
- ✅ Flutter (JSON tokens → Dart theme)
- ✅ Any web framework (CSS Variables)

### 📱 Mobile-First Responsive

```css
/* Automatic responsive scaling */
--spacing-md: 12px;  /* Mobile (0-767px) */
--spacing-md: 16px;  /* Desktop (768px+) */

--font-size-base: 14px;  /* Mobile */
--font-size-base: 16px;  /* Desktop */

/* Touch targets ≥ 48px (iOS HIG/Material Design) */
--touch-target-min: 48px;
```

---

## 🎬 Quick Start

### Step 1: Choose Your Framework

Pick your framework and follow the integration guide:

<table>
<tr>
<td width="50%">

**Taro 4.0 (React)**
```bash
# Create Taro project
taro init myProject

# Copy CSS Variables
cp tokens/css-variables.css src/styles/

# Import in app.tsx
import './styles/css-variables.css'
```

📖 [Complete Taro Guide](./guidelines/taro-integration.md)

</td>
<td width="50%">

**uni-app (Vue3)**
```bash
# Create uni-app project
npx degit dcloudio/uni-preset-vue my-project

# Copy CSS Variables
cp tokens/css-variables.css src/static/styles/

# Import in App.vue
@import './static/styles/css-variables.css';
```

📖 [Complete uni-app Guide](./guidelines/uniapp-integration.md)

</td>
</tr>
</table>

### Step 2: Apply Design Tokens

**Taro Example (React)**:
```tsx
import { View, Button } from '@tarojs/components'

function ChatMessage({ text, isAI }) {
  return (
    <View style={{
      background: isAI
        ? 'var(--ai-primary)'         // AI message (Taobao Orange)
        : 'var(--human-primary)',      // User message (Gray)
      fontFamily: isAI ? 'var(--font-family-ai)' : 'inherit',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-lg)',
      minHeight: 'var(--touch-target-min)', // 48px touch target
      color: 'white'
    }}>
      {text}
    </View>
  )
}
```

**uni-app Example (Vue3)**:
```vue
<template>
  <view :class="isAI ? 'ai-message' : 'user-message'">
    {{ text }}
  </view>
</template>

<style scoped>
.user-message {
  background: var(--human-primary);  /* Gray */
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  min-height: var(--touch-target-min);
  color: white;
}

.ai-message {
  background: var(--ai-primary);  /* Taobao Orange */
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  font-family: var(--font-family-ai);
  color: white;
}
</style>
```

---

## 📚 Complete Documentation

### Design Specifications
- **[AI_FRIENDLY_DESIGN_TOKENS.md](./docs/AI_FRIENDLY_DESIGN_TOKENS.md)** - Complete token reference + decision trees
- **[MOBILE_INTERACTION_GUIDE.md](./docs/MOBILE_INTERACTION_GUIDE.md)** - Touch targets, gestures, mobile components
- **[RESPONSIVE_SYSTEM.md](./docs/RESPONSIVE_SYSTEM.md)** - 6 breakpoints, Mobile-First strategy
- **[BUSINESS_COMPONENTS.md](./docs/BUSINESS_COMPONENTS.md)** - Data tables, forms, charts specifications
- **[DESIGN_LANGUAGE.md](./docs/DESIGN_LANGUAGE.md)** - Overall design philosophy

### Framework Integration
- **[taro-integration.md](./guidelines/taro-integration.md)** - Taro 4.0 complete guide
- **[uniapp-integration.md](./guidelines/uniapp-integration.md)** - uni-app complete guide

### For AI/Claude Code
- **[SKILL.md](./SKILL.md)** - Complete guide for Claude Code to use this design system

---

## 🎨 Design Token Categories

### Colors (Three-Layer System)

**Human Layer** (User actions):
```css
--human-primary: #737373          /* Primary action color */
--human-surface: #FFFFFF          /* Background */
--human-border: #E5E7EB           /* Borders */
--human-text-primary: #111827     /* Text */
```

**AI Layer** (AI-generated content):
```css
--ai-primary: #FF6600            /* Taobao Orange */
--ai-primary-light: #FF7A1F      /* Light orange */
--ai-primary-dark: #E55A00       /* Dark orange */
--ai-surface: #FFF7E6            /* Light orange background */
--font-family-ai: 'Nunito', sans-serif
```

**Collaboration Layer** (Human-AI co-creation):
```css
--collaboration-primary: #FF7A45  /* Blend of Human blue and AI orange */
```

### Spacing (Mobile-Responsive)
```css
--spacing-xs: 4px   (Mobile: 3px)
--spacing-sm: 8px   (Mobile: 6px)
--spacing-md: 16px  (Mobile: 12px)
--spacing-lg: 24px  (Mobile: 18px)
```

### Typography
```css
--font-family-base: -apple-system, BlinkMacSystemFont, sans-serif
--font-family-ai: 'Nunito', sans-serif  /* For AI content */
--font-size-base: 16px (Desktop) / 14px (Mobile)
```

### Mobile Touch Targets
```css
--touch-target-min: 48px         /* Minimum (iOS HIG/Material) */
--touch-target-comfortable: 56px
--touch-target-spacious: 64px
```

📖 [Complete Token Reference](./docs/AI_FRIENDLY_DESIGN_TOKENS.md)

---

## 🎯 Who Should Use ZeroAI-UI v5.1.0?

### ✅ Perfect For:

- **Cross-platform developers** using Taro/uni-app/Flutter
- **AI product builders** (ChatGPT-like interfaces)
- **Design system maintainers** who want framework independence
- **Teams using multiple frameworks** (need consistent design)
- **Projects that need Mobile + Web + Mini-programs**

### ⚠️ Maybe Not For:

- Pure marketing websites (use Tailwind directly)
- Projects with existing mature design systems
- Single-framework projects with custom UI library

---

## 🚀 Migration from v4.x

If you're using ZeroAI-UI v4.x:

### What to Keep
- ✅ All design specifications (docs/)
- ✅ Design token values (colors, spacing, etc.)
- ✅ Three-layer visual system concept

### What to Remove
- ❌ All component implementations (components/)
- ❌ Demo HTML files (demo-*.html)
- ❌ Framework-specific code

### What to Use Instead
- ✅ Your framework's native components (Taro UI, uni-ui, Material, etc.)
- ✅ Apply ZeroAI-UI design tokens to those components
- ✅ Follow integration guides for your framework

---

## 📦 Project Structure

```
ZeroAI-UI/
│
├── tokens/                         # Design Tokens (3 formats)
│   ├── design-tokens.json          # JSON (build tools)
│   ├── css-variables.css           # CSS Variables (any web framework)
│   └── tailwind.config.js          # Tailwind config (Taro/uni-app)
│
├── guidelines/                     # Framework Integration Guides
│   ├── taro-integration.md         # Taro 4.0 guide
│   └── uniapp-integration.md       # uni-app guide
│
├── docs/                           # Design Specifications
│   ├── AI_FRIENDLY_DESIGN_TOKENS.md
│   ├── MOBILE_INTERACTION_GUIDE.md
│   ├── RESPONSIVE_SYSTEM.md
│   ├── BUSINESS_COMPONENTS.md
│   └── DESIGN_LANGUAGE.md
│
├── SKILL.md                        # Guide for Claude Code
└── README.md                       # This file
```

---

## 🤝 Contributing

We welcome contributions! Especially:
- 🎨 Framework integration guides (Flutter, React Native, etc.)
- 💻 Example projects using ZeroAI-UI
- 📝 Documentation improvements
- 🌍 Translations (Chinese, Japanese, Korean)

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

- **Tailwind CSS** - For utility-first CSS inspiration
- **shadcn/ui** - For copy-paste component philosophy
- **Anthropic Claude** - For AI interaction patterns
- **Taro / uni-app** - For cross-platform frameworks

Built with ❤️ for the AI era by [@zerolong](https://github.com/zerolong)

---

<div align="center">

**⭐ Star us on GitHub if you find this useful!**

*Design once. Use everywhere.*

</div>
