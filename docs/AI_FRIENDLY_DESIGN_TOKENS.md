# ZeroAI-UI: AI-Friendly Design Token System

> **保持完整设计规范 + AI 100% 可理解**
>
> Version: 5.0.1
> Last Updated: 2025-01-31
> Philosophy: 极简设计 + 结构化决策 + 纯色系统

---

## ⚠️ 核心设计原则（强制执行）

**ZeroAI-UI v5.0.1+ 的两大铁律：**

### 1. 🚫 禁止渐变（No Gradients）

**原则**：所有颜色必须使用纯色（Solid Colors），禁止使用任何渐变。

**理由**：
- ✅ 极简美学：现代设计趋势（2024-2025）倾向扁平化
- ✅ 性能更好：纯色渲染性能优于渐变
- ✅ 可访问性：纯色对比度更易控制
- ✅ 跨平台一致：纯色在所有设备上表现一致

```css
/* ❌ 错误 - 禁止使用渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* ✅ 正确 - 使用纯色 */
background: #FA8C16;
```

### 2. 🚫 禁止 Emoji（No Emojis）

**原则**：所有图标必须使用几何设计（Geometric Icons），禁止使用 Emoji。

**理由**：
- ✅ 专业性：几何图标比 Emoji 更专业
- ✅ 一致性：Emoji 在不同系统显示不同
- ✅ 可控性：CSS/SVG 图标完全可控
- ✅ 品牌感：自定义图标强化品牌识别

```html
<!-- ❌ 错误 - 禁止使用 Emoji -->
<div class="icon">🤖</div>

<!-- ✅ 正确 - 使用几何图标 -->
<div class="icon geometric-ai-icon"></div>
```

---

## 🎯 核心理念

```
传统设计系统：
→ 提供大量 tokens
→ 设计师需要判断何时用什么
→ AI 难以理解"为什么"

ZeroAI-UI AI-Friendly 版本：
→ 提供完整的 tokens（保持所有设计元素）
→ 提供清晰的决策树（AI 知道何时用什么）
→ 提供使用场景映射（AI 自动选择）
```

**目标**：Claude Code 能 100% 理解并应用所有丰富的设计元素

---

## 📐 Design Tokens 完整定义

### 1. 颜色系统（Color Tokens）

#### 1.1 Human Layer（人类层）

```css
:root {
  /* Primary - 主色系 */
  --human-primary: #2563EB;
  --human-primary-light: #3B82F6;
  --human-primary-dark: #1D4ED8;

  /* Surface - 表面色 */
  --human-surface: #FFFFFF;
  --human-surface-elevated: #F9FAFB;
  --human-surface-sunken: #F3F4F6;

  /* Border - 边框色 */
  --human-border: #E5E7EB;
  --human-border-strong: #D1D5DB;

  /* Text - 文本色 */
  --human-text-primary: #111827;
  --human-text-secondary: #6B7280;
  --human-text-tertiary: #9CA3AF;
}
```

**AI 决策规则**：
```javascript
if (内容来源 == "用户" || 元素类型 == "传统UI") {
  使用 human-* 系列
  特征: 纯色、实线、清晰边界
}
```

---

#### 1.2 AI Layer（AI 层）

```css
:root {
  /* Primary - Ant Design Orange（AI 核心颜色）*/
  --ai-primary: #FA8C16;        /* Ant Design Orange-6 */
  --ai-primary-light: #FFA940;  /* Orange-5 (悬停) */
  --ai-primary-dark: #D46B08;   /* Orange-7 (按下) */

  /* Surface - 浅橙背景 */
  --ai-surface: #FFF7E6;        /* Orange-1 极浅背景 */
  --ai-surface-elevated: #FFE7BA; /* Orange-2 浅背景 */

  /* Border - 半透明边框 */
  --ai-border: rgba(250, 140, 22, 0.3);
  --ai-border-strong: rgba(250, 140, 22, 0.5);
}
```

**颜色选择理由**：
- 🎨 **Ant Design Orange**：阿里系成熟色彩体系
- 🔵vs🟠 **蓝橙对比**：冷暖色经典对比，区分度极高
- 🌈 **色盲友好**：蓝橙对比是色盲最易分辨的组合
- 💡 **语义匹配**：橙色 = 创造力 + 活力 + 辅助

**AI 决策规则**：
```javascript
if (内容来源 == "AI生成") {
  使用 ai-* 系列
  特征: 橙色纯色、清晰边界（无渐变、无光晕）

  // 渐变 vs 纯色的选择
  if (支持CSS渐变) {
    background = ai-gradient-primary
  } else {
    background = ai-primary  // 降级
  }

  // 光晕效果
  box-shadow = 0 0 20px var(--ai-glow)
}
```

---

#### 1.3 Collaboration Layer（协作层）

```css
:root {
  /* Collaboration - 蓝橙混合色（纯色）*/
  --collaboration-primary: #FF7A45;  /* 蓝色和橙色的中间色调 */
  --collaboration-border: rgba(255, 122, 69, 0.5);
}
```

**颜色选择理由**：
- 🎨 介于 Human Blue (#2563EB) 和 AI Orange (#FA8C16) 之间
- 🤝 视觉上传达"融合"概念
- 📊 纯色设计，符合 v5.0.1+ 原则

**AI 决策规则**：
```javascript
if (内容来源 == "人机协作" || 场景 == "共同编辑") {
  使用 collaboration-* 系列
  特征: 橙红色纯色（无渐变）
}
```

---

#### 1.4 Semantic Colors（语义色）

```css
:root {
  /* Status - 状态色 */
  --status-success: #10B981;
  --status-warning: #F59E0B;
  --status-error: #F97316;    /* 柔和橙色，不用刺眼红色 */
  --status-info: #3B82F6;

  /* Confidence - 置信度色（AI 专属）*/
  --confidence-high: #10B981;     /* >90% 绿色 */
  --confidence-medium: #F59E0B;   /* 70-90% 橙色 */
  --confidence-low: #F97316;      /* <70% 深橙 */
}
```

**AI 决策规则**：
```javascript
// 置信度颜色映射
function getConfidenceColor(confidence) {
  if (confidence >= 90) return 'var(--confidence-high)'
  if (confidence >= 70) return 'var(--confidence-medium)'
  return 'var(--confidence-low)'
}
```

---

### 2. 字体系统（Typography Tokens）

#### 2.1 Font Families（字体族）

```css
:root {
  /* Sans-serif - 通用无衬线 */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Humanist - AI 对话专用（更温暖）*/
  --font-humanist: 'Nunito', 'Avenir Next', sans-serif;

  /* Monospace - 代码 */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace;

  /* Serif - 长文阅读 */
  --font-serif: 'Merriweather', Georgia, serif;
}
```

**AI 决策规则**：
```javascript
// 字体选择逻辑
if (元素类型 == "AI消息") {
  font-family = var(--font-humanist)  // 温暖亲切
} else if (元素类型 == "代码") {
  font-family = var(--font-mono)
} else if (元素类型 == "长文阅读") {
  font-family = var(--font-serif)
} else {
  font-family = var(--font-sans)      // 默认
}
```

---

#### 2.2 Font Sizes（字号）

```css
:root {
  /* 9个字号 - 完整的排版层次 */
  --text-xs: 0.75rem;     /* 12px - 辅助文本 */
  --text-sm: 0.875rem;    /* 14px - 次要文本 */
  --text-base: 1rem;      /* 16px - 正文 */
  --text-lg: 1.125rem;    /* 18px - 小标题/AI消息 */
  --text-xl: 1.25rem;     /* 20px - 中标题 */
  --text-2xl: 1.5rem;     /* 24px - 大标题 */
  --text-3xl: 1.875rem;   /* 30px - 特大标题 */
  --text-4xl: 2.25rem;    /* 36px - 超大标题 */
  --text-5xl: 3rem;       /* 48px - 巨大标题 */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

**AI 决策规则**：
```javascript
// 字号选择逻辑
if (元素类型 == "页面标题") {
  fontSize = var(--text-4xl)
  fontWeight = var(--font-bold)
  lineHeight = var(--leading-tight)
} else if (元素类型 == "章节标题") {
  fontSize = var(--text-2xl)
  fontWeight = var(--font-semibold)
} else if (元素类型 == "AI消息") {
  fontSize = var(--text-lg)        // 比正文略大
  lineHeight = var(--leading-relaxed)  // 更舒适
} else if (元素类型 == "正文") {
  fontSize = var(--text-base)
  lineHeight = var(--leading-normal)
} else if (元素类型 == "时间戳/标签") {
  fontSize = var(--text-sm)
  color = var(--human-text-secondary)
}
```

---

### 3. 间距系统（Spacing Tokens）

```css
:root {
  /* 7个间距值 - 基于 8px 网格 */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px - 基准 */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */

  /* 语义化间距 */
  --spacing-element-gap: var(--space-2);      /* 元素间 */
  --spacing-component-gap: var(--space-4);    /* 组件间 */
  --spacing-section-gap: var(--space-8);      /* 章节间 */
}
```

**AI 决策规则**：
```javascript
// 间距选择逻辑
if (场景 == "按钮内边距") {
  padding = var(--space-2) var(--space-4)
} else if (场景 == "卡片内边距") {
  padding = var(--space-4)
} else if (场景 == "消息间距") {
  margin-bottom = var(--space-3)
} else if (场景 == "章节间距") {
  margin-bottom = var(--space-8)
}
```

---

### 4. 圆角系统（Border Radius Tokens）

```css
:root {
  /* 6个标准圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* AI 专属：有机圆角（不规则）*/
  --radius-organic: 16px 24px 20px 18px;
}
```

**AI 决策规则**：
```javascript
// 圆角选择逻辑
if (元素 == "AI内容" && 场景 == "强调自然感") {
  border-radius = var(--radius-organic)  // AI 专属特征！
} else if (元素 == "按钮/输入框") {
  border-radius = var(--radius-md)
} else if (元素 == "卡片") {
  border-radius = var(--radius-lg)
} else if (元素 == "头像/徽章") {
  border-radius = var(--radius-full)
}
```

---

### 5. 阴影系统（Shadow Tokens）

```css
:root {
  /* 3个标准阴影层级 */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  /* AI 专属：光晕效果 */
  --shadow-ai-glow: 0 0 20px rgba(102, 126, 234, 0.3);
  --shadow-ai-glow-strong: 0 0 30px rgba(102, 126, 234, 0.6);
}
```

**AI 决策规则**：
```javascript
// 阴影选择逻辑
if (元素 == "AI内容") {
  box-shadow = var(--shadow-ai-glow)  // 必须有光晕！
} else if (元素 == "卡片默认") {
  box-shadow = var(--shadow-sm)
} else if (元素 == "卡片悬停") {
  box-shadow = var(--shadow-md)
} else if (元素 == "模态框") {
  box-shadow = var(--shadow-lg)
}
```

---

### 6. 动效系统（Animation Tokens）

#### 6.1 Duration（时长）

```css
:root {
  /* 6个动画时长 */
  --duration-instant: 100ms;    /* 按钮 hover */
  --duration-fast: 200ms;       /* 菜单展开 */
  --duration-normal: 300ms;     /* 面板切换 */
  --duration-slow: 500ms;       /* AI 状态切换 */
  --duration-story: 800ms;      /* 内容涌现 */
  --duration-complex: 1200ms;   /* 版本切换 */
}
```

#### 6.2 Easing（缓动）

```css
:root {
  /* 3个缓动函数 */
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0.0, 0.6, 1);
}
```

**AI 决策规则**：
```javascript
// 动画选择逻辑
if (交互类型 == "按钮hover") {
  transition = all var(--duration-instant) var(--ease-standard)
} else if (交互类型 == "AI内容出现") {
  animation = fadeIn var(--duration-story) var(--ease-smooth)
} else if (交互类型 == "弹性效果") {
  animation = bounce var(--duration-normal) var(--ease-spring)
}
```

---

### 7. 特色动画（Signature Animations）

#### 7.1 AI Thinking Particles（思考粒子）

```css
@keyframes thinking-particles {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

.ai-thinking {
  animation: thinking-particles 2s infinite var(--ease-smooth);
}
```

**使用场景**：AI 正在思考/处理时

---

#### 7.2 Content Emerge（内容涌现）

```css
@keyframes content-emerge {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
    filter: blur(10px);
  }
  60% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.ai-content {
  animation: content-emerge var(--duration-story) var(--ease-smooth);
}
```

**使用场景**：AI 生成的内容首次出现

---

#### 7.3 Confidence Pulse（置信度脉冲）

```css
@keyframes confidence-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* 根据置信度调整速度 */
.confidence-high {
  animation: confidence-pulse 3s infinite;  /* 慢脉冲 = 稳定 */
}

.confidence-medium {
  animation: confidence-pulse 1.5s infinite;  /* 中速 */
}

.confidence-low {
  animation: confidence-pulse 0.8s infinite;  /* 快速 = 不确定 */
}
```

**使用场景**：显示 AI 置信度时

---

## 🎯 AI 决策总流程

### Claude Code 的完整决策树

```javascript
// Step 1: 识别内容来源
function identifySource(content) {
  if (content.generatedBy == "AI") return "AI"
  if (content.createdBy == "User") return "Human"
  if (content.collaborative) return "Collaboration"
  return "Neutral"
}

// Step 2: 选择颜色系统
function selectColorSystem(source) {
  switch(source) {
    case "AI":
      return {
        primary: "var(--ai-gradient-primary)",
        surface: "var(--ai-surface)",
        border: "var(--ai-border)",
        glow: "var(--shadow-ai-glow)"
      }
    case "Human":
      return {
        primary: "var(--human-primary)",
        surface: "var(--human-surface)",
        border: "var(--human-border)",
        glow: null
      }
    case "Collaboration":
      return {
        primary: "var(--collab-gradient)",
        surface: "var(--ai-surface)",
        border: "var(--ai-border)",
        glow: null
      }
  }
}

// Step 3: 选择字体
function selectFont(elementType) {
  if (elementType == "ai-message") return "var(--font-humanist)"
  if (elementType == "code") return "var(--font-mono)"
  if (elementType == "long-read") return "var(--font-serif)"
  return "var(--font-sans)"
}

// Step 4: 选择字号
function selectFontSize(elementType) {
  const sizeMap = {
    "page-title": "var(--text-4xl)",
    "section-title": "var(--text-2xl)",
    "card-title": "var(--text-xl)",
    "ai-message": "var(--text-lg)",
    "body": "var(--text-base)",
    "caption": "var(--text-sm)",
    "tag": "var(--text-xs)"
  }
  return sizeMap[elementType] || "var(--text-base)"
}

// Step 5: 选择圆角
function selectRadius(element, source) {
  if (source == "AI" && element.emphasizeNature) {
    return "var(--radius-organic)"  // AI 专属！
  }
  if (element == "avatar") return "var(--radius-full)"
  if (element == "card") return "var(--radius-lg)"
  if (element == "button") return "var(--radius-md)"
  return "var(--radius-md)"
}

// Step 6: 应用光晕（AI 专属）
function applyGlow(source) {
  if (source == "AI") {
    return "box-shadow: var(--shadow-ai-glow)"
  }
  return ""
}

// 完整流程
function generateStyles(content, elementType) {
  const source = identifySource(content)
  const colors = selectColorSystem(source)
  const font = selectFont(elementType)
  const fontSize = selectFontSize(elementType)
  const radius = selectRadius(elementType, source)
  const glow = applyGlow(source)

  return {
    background: colors.primary,
    border: `1px solid ${colors.border}`,
    fontFamily: font,
    fontSize: fontSize,
    borderRadius: radius,
    boxShadow: glow || colors.glow || "var(--shadow-sm)"
  }
}
```

---

## 📖 Claude Code 使用示例

### 示例 1: AI 对话消息

**用户请求**：创建一个 AI 消息组件

**Claude Code 思考过程**：
```
1. 识别内容来源：AI 生成
2. 选择颜色：ai-gradient-primary (渐变)
3. 选择字体：font-humanist (Nunito)
4. 选择字号：text-lg (18px)
5. 选择圆角：radius-organic (16px 24px 20px 18px)  ← AI 专属！
6. 添加光晕：shadow-ai-glow ← 必须！
7. 添加动画：content-emerge
```

**生成代码**：
```html
<div class="ai-message" style="
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 16px 24px 20px 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 1.125rem;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  animation: content-emerge 0.8s cubic-bezier(0.4, 0, 0.6, 1);
">
  这是 AI 的回复
</div>
```

---

### 示例 2: 用户输入框

**用户请求**：创建输入框

**Claude Code 思考过程**：
```
1. 识别内容来源：用户输入
2. 选择颜色：human-primary (蓝色)
3. 选择字体：font-sans (Inter)
4. 选择字号：text-base (16px)
5. 选择圆角：radius-md (8px)
6. 无光晕（仅人类层）
```

**生成代码**：
```html
<input type="text" style="
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
">
```

---

## ✅ 总结

### 完整保留的设计元素

- ✅ 3层颜色系统（Human/AI/Collaboration）
- ✅ 渐变系统（AI 专属）
- ✅ 有机圆角（16px 24px 20px 18px）
- ✅ AI 光晕效果
- ✅ 9个字号完整层次
- ✅ 4种字体族
- ✅ 7个间距值
- ✅ 6个圆角选项
- ✅ 4个阴影层级
- ✅ 6个动画时长
- ✅ 3个缓动函数
- ✅ 特色动画（thinking-particles, content-emerge, confidence-pulse）

### AI 可理解性提升

- ✅ 结构化决策树（清晰的 if-then 逻辑）
- ✅ 使用场景映射（AI 知道何时用什么）
- ✅ 完整的 CSS Variables（所有值都有变量名）
- ✅ 明确的优先级（必须 vs 可选）

---

**没有删减任何视觉规范，只是让它变得 AI-friendly！**
