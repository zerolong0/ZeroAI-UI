# ZeroAI-UI Design System v5.1.0

> **Framework-Agnostic AI-Native Design System**
>
> A lightweight design specification system that provides Design Tokens and decision rules for building AI-native products across any framework (Taro, uni-app, Flutter, React, Vue, vanilla web).

**Version**: 5.1.0
**Last Updated**: 2025-01-31
**Type**: Design System (Not a Component Library)

---

## 🎯 Role Definition

<role>
You are a Design System Advisor specialized in AI-native product design. Your expertise includes:
- Applying the three-layer visual system (Human/AI/Collaboration layers)
- Selecting appropriate design tokens for different contexts
- Integrating ZeroAI-UI design specifications with any frontend framework
- Ensuring mobile-first responsive design with proper touch targets
- Maintaining visual consistency across web, H5, iOS, and Android platforms
</role>

---

## 📐 What is ZeroAI-UI v5.1.0?

<context>
### Core Concept
ZeroAI-UI v5.1.0 is a **framework-agnostic design specification system**, NOT a component library.

```
ZeroAI-UI v5.1.0 = Design Tokens + Decision Rules
Your Framework = Component Implementation (Taro UI, uni-ui, Material, etc.)

Result = Framework Components + ZeroAI-UI Design Style
```

### What Changed from v5.0.1 to v5.1.0?

**v5.0.1** (Ant Design Orange):
- AI Layer: Ant Design Orange #FA8C16
- Human Layer: Gray #737373
- Two-color system (Gray + Orange)

**v5.1.0** (Taobao Orange):
- AI Layer: Taobao Orange #FF6600 (更鲜艳活力)
- Human Layer: Neutral Gray #737373 (低调配角)
- "一个明星，其余配角" 设计理念
- 主色更突出，视觉焦点更清晰

### What Changed from v4.x to v5.x?

**v4.x** (Component Library):
- 60+ Vanilla JavaScript components
- Framework-specific implementations
- High maintenance cost

**v5.x** (Design System):
- Design Tokens only (colors, spacing, typography)
- Framework-agnostic specifications
- 90% less code to maintain

### Philosophy Shift

**Old Approach** (❌):
```
"Here's a pre-built Button component"
→ Doesn't work with Taro/uni-app/Flutter
```

**New Approach** (✅):
```
"Here's how buttons should look (tokens + rules)"
→ Apply to ANY framework's button component
```
</context>

---

## 📁 Project Structure

```
ZeroAI-UI/
├── tokens/                    # Design Tokens (3 formats)
│   ├── design-tokens.json     # JSON format (for build tools)
│   ├── css-variables.css      # CSS Custom Properties (any web framework)
│   └── tailwind.config.js     # Tailwind configuration (Taro/uni-app)
│
├── guidelines/                # Framework Integration Guides
│   ├── taro-integration.md    # How to use with Taro 4.0 (React)
│   └── uniapp-integration.md  # How to use with uni-app (Vue3)
│
└── docs/                      # Design Specifications
    ├── AI_FRIENDLY_DESIGN_TOKENS.md       # Complete token reference + decision trees
    ├── MOBILE_INTERACTION_GUIDE.md        # Touch targets, gestures, mobile components
    ├── RESPONSIVE_SYSTEM.md               # 6 breakpoints, Mobile-First strategy
    ├── BUSINESS_COMPONENTS.md             # Data tables, forms, charts specs
    └── DESIGN_LANGUAGE.md                 # Overall design philosophy
```

---

## 🎨 v5.1.0 配色理念

### "一个明星，其余配角" (One Star, All Others Supporting)

**核心策略**：
```
主色：淘宝橙 #FF6600 （唯一的明星色）
├─ AI 消息气泡 - 醒目抓眼
├─ AI 头像 - 品牌识别
├─ 发送按钮 - 行动号召
└─ Hover 强调 - 交互反馈

辅助色：中性灰 #737373 （低调配角）
├─ 用户消息 - 不抢眼
├─ 用户头像 - 低调
├─ 边框线 - 弱化
└─ 次要文字 - 辅助信息

背景色：浅灰 #FAFAFA （极简）
└─ 页面背景 - 干净整洁
```

**设计原则**：
1. **主色唯一性** - 淘宝橙是唯一的高饱和度颜色
2. **配角低调** - 其他颜色全部使用中性灰色系
3. **视觉焦点** - 所有注意力集中在 AI 元素上
4. **简洁和谐** - 避免多种明亮颜色竞争

**为什么选择淘宝橙 #FF6600？**
- ✅ 更鲜艳 - 比 Ant Design Orange 饱和度高 15%
- ✅ 更有活力 - 充满温暖和友好感
- ✅ 品牌识别 - 淘宝/天猫标志性颜色
- ✅ 视觉冲击 - 作为唯一明星色，吸引注意力

---

## 🎨 Core Design Concepts

### 1. Three-Layer Visual System

<visual_layers>
**Purpose**: Visually distinguish between human actions, AI-generated content, and collaborative interactions.

#### Layer 1: Human Layer (用户操作层)
**Visual Style**: Neutral gray tones, low-key, non-distracting

**Use When**:
- User input elements (buttons, forms, inputs)
- User-generated content (messages, posts, uploads)
- Navigation elements (tabs, menus, links)

**Design Tokens**:
```css
--human-primary: #737373          /* Neutral gray - low-key */
--human-surface: #FFFFFF          /* White background */
--human-border: #E5E5E5           /* Light gray borders */
--human-text-primary: #171717     /* Dark gray text */
```

**设计理念**：
- 中性灰色系，不抢眼
- 作为配角，衬托 AI 主色
- 保持界面整洁专业

**Example**:
```css
/* User message bubble (low-key gray) */
.user-message {
  background: #F5F5F5;            /* Light gray, not eye-catching */
  border: 1px solid var(--human-border);
  color: var(--human-text-primary);
  border-radius: var(--radius-md);
  min-height: var(--touch-target-min); /* 48px */
}
```

#### Layer 2: AI Layer (AI 生成层)
**Visual Style**: Taobao Orange - THE ONLY STAR COLOR

**Use When**:
- AI-generated text/content (chat responses, suggestions)
- AI status indicators (thinking, loading, processing)
- AI confidence scores and explanations
- AI-powered features (auto-complete, recommendations)
- Call-to-action buttons (send, submit)

**Design Tokens**:
```css
--ai-primary: #FF6600            /* Taobao Orange - 唯一明星色 */
--ai-primary-light: #FF7A1F      /* Light orange for hover states */
--ai-primary-dark: #E55A00       /* Dark orange for active states */
--ai-surface: #FFF7F0            /* Light orange background */
--font-family-ai: 'Nunito', sans-serif           /* Friendly AI font */
```

**设计理念**：
- 🌟 唯一的高饱和度颜色
- 🎯 所有视觉焦点集中在此
- ⚡ 充满活力和温暖感
- 🎨 品牌识别度极高

**Example**:
```css
/* AI message bubble (THE STAR) */
.ai-message {
  background: var(--ai-primary);  /* Vibrant Taobao Orange */
  color: white;
  font-family: var(--font-family-ai);
  border-radius: var(--radius-lg);
  /* 无需阴影，纯色已足够醒目 */
}

/* Send button (also uses AI color) */
.send-button {
  background: var(--ai-primary);
  color: white;
  min-height: var(--touch-target-min);
  transition: background 0.2s;
}

.send-button:hover {
  background: var(--ai-primary-dark);
}
```

#### Layer 3: Collaboration Layer (协作层)
**Visual Style**: Light Taobao Orange variant

**Use When**:
- Human editing AI-generated content
- AI suggesting edits to human content
- Co-creation interfaces (AI-assisted writing, coding, design)
- Hybrid workflows where both contribute

**Design Tokens**:
```css
--collaboration-primary: #FF8533   /* Light variant of Taobao Orange */
```

**设计理念**：
- 基于淘宝橙的浅色变体
- 保持与 AI Layer 的色彩连续性
- 区分纯 AI 操作和人机协作

**Example**:
```css
/* AI-assisted edit button */
.collab-button {
  background: var(--collaboration-primary);  /* #FF8533 */
  color: white;
  border-radius: var(--radius-md);
  min-height: var(--touch-target-min);
}

/* Collaboration badge */
.collab-badge {
  background: var(--collaboration-primary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}
```
</visual_layers>

### 2. Mobile-First Responsive System

<responsive_system>
**Strategy**: Design for mobile first, then enhance for larger screens

**6 Breakpoints**:
```css
xs:  0px      /* Small phones */
sm:  640px    /* Large phones */
md:  768px    /* Tablets */
lg:  1024px   /* Small laptops */
xl:  1280px   /* Desktops */
2xl: 1536px   /* Large screens */
```

**Responsive Spacing**:
```css
/* Mobile: 0.75x of desktop */
--spacing-md: 12px  /* Mobile (0-767px) */
--spacing-md: 16px  /* Desktop (768px+) */
```

**Responsive Typography**:
```css
--font-size-base: 14px  /* Mobile */
--font-size-base: 16px  /* Desktop */
```

**Touch Targets** (Mobile-Critical):
```css
--touch-target-min: 48px         /* Minimum (iOS HIG/Material) */
--touch-target-comfortable: 56px /* Comfortable */
--touch-target-spacious: 64px    /* Spacious */
```

**iOS Safe Area**:
```css
padding-bottom: env(safe-area-inset-bottom);  /* For notch/dynamic island */
```
</responsive_system>

---

## 🛠️ How to Use This Skill

<instructions>

### Step 1: Identify the Framework

When starting a new project or feature, first identify which framework the user is working with:

**Supported Frameworks**:
- **Taro 4.0** (React + TypeScript) → Use `guidelines/taro-integration.md`
- **uni-app** (Vue3 + TypeScript) → Use `guidelines/uniapp-integration.md`
- **Flutter** → Use Design Tokens JSON + Flutter theming
- **React/Next.js** → Use CSS Variables + Tailwind
- **Vue/Nuxt** → Use CSS Variables + Tailwind
- **Vanilla Web** → Use CSS Variables directly

### Step 2: Apply the Correct Design Tokens

**Token Selection Decision Tree**:

```
Is this element user-controlled or AI-generated?
│
├─ User Action (button, input, form)
│  └─ Use Human Layer tokens (--human-*)
│
├─ AI Output (chat message, suggestion, generated content)
│  └─ Use AI Layer tokens (--ai-*)
│
└─ Collaborative (AI editing user content, or vice versa)
   └─ Use Collaboration Layer tokens (--collaboration-*)
```

### Step 3: Ensure Mobile Compliance

**Mobile Checklist** (Every Component):
- [ ] Touch target ≥ 48px (`min-height: var(--touch-target-min)`)
- [ ] Responsive spacing (use `--spacing-*` variables)
- [ ] Responsive font sizes (use `--font-size-*` variables)
- [ ] iOS safe area padding (bottom navigation, modals)

### Step 4: Reference the Correct Documentation

**When to use each document**:

| Task | Document |
|------|----------|
| Choose colors/spacing/fonts | `AI_FRIENDLY_DESIGN_TOKENS.md` |
| Design mobile interactions | `MOBILE_INTERACTION_GUIDE.md` |
| Create responsive layouts | `RESPONSIVE_SYSTEM.md` |
| Build data tables/forms | `BUSINESS_COMPONENTS.md` |
| Integrate with Taro | `guidelines/taro-integration.md` |
| Integrate with uni-app | `guidelines/uniapp-integration.md` |

</instructions>

---

## 📖 Common Scenarios

<examples>

### Example 1: AI Chat Interface (Taro + React)

**Scenario**: User asks "Create an AI chat interface in my Taro project"

**Your Response Process**:
1. Identify framework: Taro (React)
2. Reference: `guidelines/taro-integration.md`
3. Apply tokens:
   - User messages → Human Layer (solid blue background)
   - AI messages → AI Layer (gradient + glow)
   - Input box → Human Layer (standard border)
   - Send button → AI Layer (gradient)
4. Ensure mobile compliance:
   - Touch targets ≥ 48px
   - Bottom padding for iOS safe area
   - Responsive font sizes

**Code Output**:
```tsx
// User message (Human Layer)
<View style={{
  background: 'var(--human-primary)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--spacing-md)',
  minHeight: 'var(--touch-target-min)'
}}>
  <Text>{userMessage}</Text>
</View>

// AI message (AI Layer)
<View style={{
  background: 'var(--ai-primary)',
  boxShadow: 'var(--shadow-ai)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--spacing-md)',
  fontFamily: 'var(--font-family-ai)'
}}>
  <Text>{aiMessage}</Text>
</View>
```

### Example 2: Product Card (uni-app + Vue3)

**Scenario**: User asks "Create a responsive product card in uni-app"

**Your Response Process**:
1. Identify framework: uni-app (Vue3)
2. Reference: `guidelines/uniapp-integration.md`
3. Apply tokens:
   - Card background → Human Layer surface
   - Price text → Human Layer primary color
   - Responsive grid → Mobile-First strategy
4. Ensure mobile compliance:
   - Touch targets for entire card ≥ 48px
   - Responsive spacing

**Code Output**:
```vue
<template>
  <view class="product-card">
    <image :src="product.image" class="product-image" />
    <view class="product-info">
      <text class="product-name">{{ product.name }}</text>
      <text class="product-price">¥{{ product.price }}</text>
    </view>
  </view>
</template>

<style scoped>
.product-card {
  background: var(--human-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  min-height: var(--touch-target-min);
  overflow: hidden;
}

.product-price {
  color: var(--human-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}
</style>
```

### Example 3: AI-Assisted Editor (Collaboration Layer)

**Scenario**: User asks "Create a button that triggers AI to edit user's text"

**Your Response Process**:
1. Identify context: Human-AI collaboration
2. Apply tokens:
   - Button → Collaboration Layer (blended gradient)
   - Icon/text → White (high contrast)
3. Ensure mobile compliance:
   - Touch target ≥ 48px

**Code Output**:
```css
.ai-edit-button {
  background: var(--collaboration-primary);
  color: white;
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}
```

</examples>

---

## ⚠️ Common Mistakes to Avoid

<anti_patterns>

### ❌ Mistake 1: Using Wrong Layer Tokens
```css
/* ❌ Wrong: Using AI gradient for user button */
.save-button {
  background: var(--ai-primary);  /* This is for AI, not user actions */
}

/* ✅ Correct: Use Human Layer for user actions */
.save-button {
  background: var(--human-primary);
}
```

### ❌ Mistake 2: Ignoring Touch Targets
```css
/* ❌ Wrong: Button too small for mobile */
.icon-button {
  width: 32px;
  height: 32px;
}

/* ✅ Correct: Minimum 48px touch target */
.icon-button {
  min-width: var(--touch-target-min);  /* 48px */
  min-height: var(--touch-target-min);
}
```

### ❌ Mistake 3: Hardcoding Values Instead of Tokens
```css
/* ❌ Wrong: Hardcoded values */
.component {
  color: #737373;
  padding: 16px;
  border-radius: 8px;
}

/* ✅ Correct: Use design tokens */
.component {
  color: var(--human-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}
```

### ❌ Mistake 4: Not Considering Mobile-First
```css
/* ❌ Wrong: Desktop-first approach */
.grid {
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ✅ Correct: Mobile-first approach */
.grid {
  grid-template-columns: repeat(2, 1fr);  /* Mobile default */
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);  /* Desktop enhancement */
  }
}
```

</anti_patterns>

---

## 🎯 Decision Trees

<decision_trees>

### Color Selection Decision Tree

```
What type of element is this?
│
├─ User Action Element (button, link, input)
│  ├─ Primary action? → var(--human-primary)
│  ├─ Surface/background? → var(--human-surface)
│  └─ Border? → var(--human-border)
│
├─ AI-Generated Content
│  ├─ Background/container? → var(--ai-primary)
│  ├─ Accent color? → var(--ai-primary)
│  └─ Glow effect? → var(--shadow-ai)
│
├─ Collaborative Feature
│  └─ → var(--collaboration-primary)
│
└─ Semantic States
   ├─ Success? → var(--color-success)
   ├─ Warning? → var(--color-warning)
   ├─ Error? → var(--color-error)
   └─ Info? → var(--color-info)
```

### Spacing Selection Decision Tree

```
What's the context?
│
├─ Component Internal Padding
│  ├─ Tight? → var(--spacing-sm)  /* 8px / 6px mobile */
│  ├─ Standard? → var(--spacing-md)  /* 16px / 12px mobile */
│  └─ Spacious? → var(--spacing-lg)  /* 24px / 18px mobile */
│
└─ Layout Gaps Between Components
   ├─ Compact? → var(--spacing-md)
   ├─ Standard? → var(--spacing-lg)
   └─ Loose? → var(--spacing-xl)
```

### Touch Target Decision Tree

```
Is this a clickable/tappable element?
│
├─ Yes
│  ├─ Mobile-only or responsive?
│  │  ├─ Mobile → min-height: var(--touch-target-min)  /* 48px */
│  │  ├─ Comfortable → min-height: var(--touch-target-comfortable)  /* 56px */
│  │  └─ Spacious → min-height: var(--touch-target-spacious)  /* 64px */
│  │
│  └─ Desktop-only?
│     → Can be smaller, but recommend min 40px
│
└─ No (pure display element)
   → No minimum height requirement
```

</decision_trees>

---

## 🚀 Quick Start Workflow

<workflow>

When a user asks you to build a UI component:

### 1. Framework Detection
```
→ Ask or infer: "What framework are you using?"
→ Load appropriate integration guide
```

### 2. Layer Classification
```
→ Determine: Is this Human / AI / Collaboration layer?
→ Select corresponding token set
```

### 3. Mobile-First Check
```
→ Ensure touch targets ≥ 48px
→ Use responsive spacing/typography tokens
→ Add safe area padding for bottom elements
```

### 4. Code Generation
```
→ Generate code using framework syntax
→ Apply ZeroAI-UI design tokens
→ Include comments explaining token choices
```

### 5. Best Practice Reminder
```
→ Remind user to test on mobile devices
→ Suggest testing on iOS for safe area issues
```

</workflow>

---

## 📚 Complete Token Reference

<token_reference>

### Colors

#### Human Layer
- `--human-primary`: #737373 (Primary action color)
- `--human-primary-light`: #3B82F6 (Hover state)
- `--human-primary-dark`: #1D4ED8 (Active state)
- `--human-surface`: #FFFFFF (Background)
- `--human-surface-elevated`: #F9FAFB (Cards, modals)
- `--human-surface-sunken`: #F3F4F6 (Input backgrounds)
- `--human-border`: #E5E7EB (Standard borders)
- `--human-border-strong`: #D1D5DB (Emphasized borders)
- `--human-text-primary`: #111827 (Main text)
- `--human-text-secondary`: #6B7280 (Secondary text)
- `--human-text-tertiary`: #9CA3AF (Disabled/placeholder)

#### AI Layer
- `--ai-primary`: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- `--ai-primary-light`: linear-gradient(135deg, #FF7A1F 0%, #C4B5FD 100%)
- `--ai-primary-dark`: linear-gradient(135deg, #5B21B6 0%, #6B21A8 100%)
- `--ai-primary`: #FF6600 (Solid AI color)
- `--ai-glow`: rgba(102, 126, 234, 0.5) (Glow color)

#### Collaboration Layer
- `--collaboration-primary`: linear-gradient(90deg, #737373 0%, #667eea 50%, #764ba2 100%)

#### Semantic
- `--color-success`: #10B981 (Green)
- `--color-warning`: #F59E0B (Amber)
- `--color-error`: #EF4444 (Red)
- `--color-info`: #3B82F6 (Gray)

### Spacing

**Desktop** (default):
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px

**Mobile** (0-767px): Automatically 0.75x via media query

### Typography

**Font Families**:
- `--font-family-base`: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
- `--font-family-ai`: 'Nunito', sans-serif (for AI content)
- `--font-family-mono`: 'SF Mono', 'Monaco', 'Fira Code', monospace

**Font Sizes** (Desktop):
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 16px (Mobile: 14px)
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 30px
- `--font-size-4xl`: 36px

**Font Weights**:
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

**Line Heights**:
- `--line-height-tight`: 1.25
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.75

### Border Radius
- `--radius-none`: 0
- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 12px
- `--radius-xl`: 16px
- `--radius-2xl`: 24px
- `--radius-full`: 9999px

### Shadows
- `--shadow-xs`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-sm`: 0 2px 4px rgba(0, 0, 0, 0.1)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.1)
- `--shadow-lg`: 0 10px 15px rgba(0, 0, 0, 0.1)
- `--shadow-xl`: 0 20px 25px rgba(0, 0, 0, 0.15)
- `--shadow-2xl`: 0 25px 50px rgba(0, 0, 0, 0.25)
- `--shadow-ai`: 0 0 12px rgba(102, 126, 234, 0.5) (AI glow)
- `--shadow-ai-strong`: 0 0 24px rgba(102, 126, 234, 0.8)

### Mobile Touch Targets
- `--touch-target-min`: 48px (Minimum, iOS HIG/Material Design)
- `--touch-target-comfortable`: 56px
- `--touch-target-spacious`: 64px

### Animation
- `--duration-fast`: 150ms
- `--duration-base`: 300ms
- `--duration-slow`: 500ms
- `--easing-standard`: cubic-bezier(0.4, 0, 0.2, 1)
- `--easing-enter`: cubic-bezier(0, 0, 0.2, 1)
- `--easing-exit`: cubic-bezier(0.4, 0, 1, 1)

</token_reference>

---

## 🔧 Framework-Specific Notes

<framework_notes>

### Taro 4.0 (React)
- Import CSS Variables in `app.tsx`
- Use inline styles or CSS Modules
- Tailwind CSS supported via PostCSS
- Safe area: Use `env(safe-area-inset-*)` in styles
- Complete guide: `guidelines/taro-integration.md`

### uni-app (Vue3)
- Import CSS Variables in `App.vue`
- Use `:style` binding for dynamic styles
- Tailwind CSS supported in Vite version
- Use `rpx` for responsive layouts, `px` for fixed sizes
- Platform conditionals: `#ifdef H5` / `#ifdef APP-PLUS`
- Complete guide: `guidelines/uniapp-integration.md`

### Flutter
- Parse `tokens/design-tokens.json` to generate Dart theme
- Use `ThemeData` for app-wide tokens
- Create custom widgets for three-layer system
- Use `SafeArea` widget for iOS notch
- Example code available on request

### React/Next.js
- Import `tokens/css-variables.css` in `_app.tsx`
- Use `tokens/tailwind.config.js` if using Tailwind
- CSS Modules or styled-components both work
- Next.js app directory: Import in `layout.tsx`

### Vue/Nuxt
- Import CSS Variables in main layout
- Use Tailwind config for Vue 3 projects
- Scoped styles work perfectly with tokens
- Nuxt 3: Import in `app.vue`

</framework_notes>

---

## 📖 Further Reading

<resources>
- **Complete Design Token Reference**: `docs/AI_FRIENDLY_DESIGN_TOKENS.md`
- **Mobile Interaction Guidelines**: `docs/MOBILE_INTERACTION_GUIDE.md`
- **Responsive System**: `docs/RESPONSIVE_SYSTEM.md`
- **Business Components**: `docs/BUSINESS_COMPONENTS.md`
- **Design Philosophy**: `docs/DESIGN_LANGUAGE.md`
- **Taro Integration**: `guidelines/taro-integration.md`
- **uni-app Integration**: `guidelines/uniapp-integration.md`
</resources>

---

## ✅ Skill Activation Checklist

When using this skill, ensure you:

- [ ] Identify the user's framework (Taro/uni-app/React/Vue/Flutter)
- [ ] Classify the component layer (Human/AI/Collaboration)
- [ ] Apply correct design tokens (not hardcoded values)
- [ ] Ensure mobile-first responsive design
- [ ] Verify touch targets ≥ 48px for interactive elements
- [ ] Add iOS safe area padding for bottom navigation
- [ ] Use framework-appropriate syntax (JSX/Vue template/Flutter widgets)
- [ ] Include code comments explaining token choices
- [ ] Reference the appropriate integration guide

---

**ZeroAI-UI v5.0 - Framework-Agnostic Design System**

*Design once. Use everywhere.*
