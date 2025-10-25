# EMERGENCE DESIGN LANGUAGE v3.3
## AI时代的产品设计语言完整规范

---

**版本**: 3.3.0
**最后更新**: 2025-01-17
**适用平台**: Web, H5, iOS, Android
**核心理念**: AI为主，GUI为辅

---

## 📖 目录

1. [核心理念](#1-核心理念)
2. [设计原则](#2-设计原则)
3. [布局系统](#3-布局系统)
4. [交互设计](#4-交互设计)
5. [视觉系统](#5-视觉系统)
6. [组件库](#6-组件库)
7. [Design Tokens](#7-design-tokens)
8. [跨平台适配](#8-跨平台适配)
9. [实施指南](#9-实施指南)
10. [Claude Code Skill](#10-claude-code-skill)

---

## 1. 核心理念

### 1.1 范式转变

```
传统产品（GUI-first）:
  GUI占据70% → AI辅助30%

EMERGENCE（AI-first）:
  AI交互70% → GUI快捷30%
```

### 1.2 核心主张

**"AI对话不是工具，而是工作区本身"**

- ✅ 界面是流动的，不是静态的
- ✅ 对话是主流程，GUI是快捷方式
- ✅ 生成在中心，不在侧边
- ✅ AI应该看得见、摸得着、可信任

### 1.3 用户心智模型变化

```
传统: 我要学习软件的逻辑 → 按软件方式思考
AI时代: 我直接说出目标 → AI理解并执行
```

---

## 2. 设计原则

### 2.1 七大核心原则

#### Principle 1: Context-Aware Fluidity（上下文流动性）
界面根据上下文动态变化，不再静态固定

#### Principle 2: Transparent Intelligence（透明智能）
用户必须理解AI在做什么、为什么这么做

#### Principle 3: AI-First Interaction（AI优先交互）
对话是主要交互方式，GUI降级为辅助

#### Principle 4: Graceful Uncertainty（优雅的不确定性）
AI会犯错，设计语言内置错误处理

#### Principle 5: Progressive Disclosure（渐进式复杂度）
新手看到简单界面，专家能访问深层功能

#### Principle 6: Human Agency（人类主导权）
AI是助手不是替代，用户永远拥有最终决策权

#### Principle 7: Flat & Functional Design（扁平化与功能性）
采用扁平化设计语言，去除多余装饰，强调简洁和功能

**核心特征**:
- ✅ 无渐变阴影 - 使用纯色和清晰边界
- ✅ 简洁图标 - 扁平风格图标系统
- ✅ 明确层次 - 通过颜色和间距而非3D效果
- ✅ 快速加载 - 减少视觉复杂度提升性能
- ⚠️ AI层例外 - AI相关组件可使用品牌渐变

**详细规范**: 参考 `docs/icon-design-guidelines.md`

---

## 3. 布局系统

### 3.1 Desktop布局（>1440px）

```
┌─────────────────────────────────────────────┐
│  Top Bar (56px)                              │
│  [Logo] [Project] [Collaborators] [Settings]│
├────────┬────────────────────────────────────┤
│        │                                    │
│  GUI   │   AI Workspace                     │
│  Tool  │                                    │
│  Bar   │   • 对话历史                        │
│ 280px  │   • 生成内容预览                    │
│        │   • 实时编辑                        │
│  可     │   • 版本对比                        │
│  收     │                                    │
│  起     │                                    │
│        │                                    │
├────────┼────────────────────────────────────┤
│        │  Input Bar (72px)                  │
│        │  [___________________________] [发送]│
└────────┴────────────────────────────────────┘
```

**空间分配**:
- AI工作区: 70%
- GUI工具栏: 30% (可折叠至64px)

### 3.2 响应式断点

```javascript
breakpoints: {
  mobile: '0-767px',
  tablet: '768-1023px',
  laptop: '1024-1439px',
  desktop: '1440px+',
  ultrawide: '1920px+',
}
```

### 3.3 网格系统

```css
/* 基于8px网格 */
--grid-unit: 8px;
--grid-columns: 12;
--grid-gap: 24px;
```

---

## 4. 交互设计

### 4.1 主要交互流程

#### 流程A: 从零创建（AI主导）

```
1. 用户进入 → AI欢迎界面 + 快速开始选项
2. 用户输入意图 → AI思考可视化（步骤+进度）
3. AI生成多方案 → 方案对比界面（推荐标识）
4. 用户选择方案 → 进入编辑模式（对话+GUI混合）
```

#### 流程B: 精化迭代（人机协作）

```
触发方式:
  • 对话输入: "把这个改成xxx"
  • ⌘+K inline编辑
  • 选中元素 + 右键菜单
  • Refinement工具栏快捷按钮

执行过程:
  1. AI理解精化意图
  2. 实时生成diff预览
  3. 用户Tab接受 / Esc拒绝
  4. 版本自动保存到历史树
```

### 4.2 快捷键规范

```javascript
globalShortcuts: {
  // AI交互
  'Cmd/Ctrl + K': '打开inline AI编辑',
  'Cmd/Ctrl + J': '打开AI对话面板',
  'Cmd/Ctrl + ;': 'AI分析当前选中',

  // 快速操作
  'Tab': '接受AI建议',
  'Esc': '拒绝AI建议',
  'Cmd/Ctrl + Z': '撤销（含AI操作）',

  // 视图控制
  'Cmd/Ctrl + \\': '切换GUI工具栏',
  'Cmd/Ctrl + [': '上一个版本',
  'Cmd/Ctrl + ]': '下一个版本',
}
```

### 4.3 手势系统

**Desktop**:
- Click: 选中
- Double Click: 编辑
- Right Click: 上下文菜单
- Drag: 移动/调整

**Mobile**:
- Swipe Up from Bottom: 展开AI输入
- Swipe from Left Edge: 打开GUI抽屉
- Long Press: 上下文菜单
- Double Tap: 快速编辑

### 4.4 AI状态机

```typescript
enum AIState {
  IDLE,        // 待机
  LISTENING,   // 接收语音
  THINKING,    // 分析生成
  GENERATING,  // 创建内容
  PRESENTING,  // 展示结果
  REFINING,    // 精化调整
  ERROR,       // 错误处理
}
```

---

## 5. 视觉系统

### 5.1 颜色系统

#### 语义化颜色

```css
/* 人类层（确定性、传统UI） */
--human-primary: #2563EB;
--human-surface: #FFFFFF;
--human-border: #E5E7EB;
--human-text-primary: #111827;

/* AI层（智能、生成、不确定性） */
--ai-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--ai-surface: rgba(255, 255, 255, 0.7);
--ai-border: rgba(102, 126, 234, 0.3);
--ai-glow: rgba(102, 126, 234, 0.5);

/* 协作层（人机共创） */
--collab-primary: linear-gradient(135deg, #2563EB 0%, #667eea 50%, #764ba2 100%);

/* 状态颜色 */
--status-success: #10B981;
--status-warning: #F59E0B;
--status-error: #F97316; /* 柔和橙色，不用刺眼红色 */

/* 置信度颜色 */
--confidence-high: #10B981;   /* >90% */
--confidence-medium: #F59E0B; /* 70-90% */
--confidence-low: #F97316;    /* <70% */
```

#### 颜色使用规则

```javascript
使用场景映射: {
  用户输入内容: '人类层颜色（纯色、实线）',
  AI生成内容: 'AI层颜色（渐变、半透明）',
  协作编辑内容: '协作层颜色（混合渐变）',
  GUI工具栏: '人类层颜色（中性灰阶）',
}
```

### 5.2 字体排版

#### 字体族

```css
--font-sans: 'Inter', -apple-system, sans-serif;
--font-humanist: 'Nunito', 'Avenir Next', sans-serif; /* AI对话专用 */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
--font-serif: 'Merriweather', Georgia, serif;
```

#### 字号体系（基于8px网格）

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

#### 排版使用规则

```css
.user-message {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.5;
}

.ai-message {
  font-family: var(--font-humanist); /* 更人性化 */
  font-size: var(--text-lg);         /* 略大 */
  line-height: 1.75;                 /* 更舒适 */
}

.ai-thinking-text {
  font-size: var(--text-sm);
  font-style: italic; /* 区分思考过程 */
  color: var(--human-text-secondary);
}
```

### 5.3 间距系统

```css
/* 基于8px */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px - 基准 */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */

/* 语义化 */
--spacing-element-gap: var(--space-2);
--spacing-component-gap: var(--space-4);
--spacing-section-gap: var(--space-8);
```

### 5.4 圆角与阴影

```css
/* 圆角 */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;

/* AI内容专用：有机圆角 */
--radius-organic: 16px 24px 20px 18px;

/* 阴影 */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-ai-glow: 0 0 20px rgba(102, 126, 234, 0.3);
```

### 5.5 动效规范

#### 动画时长

```css
--duration-instant: 100ms;   /* 按钮hover */
--duration-fast: 200ms;      /* 菜单展开 */
--duration-normal: 300ms;    /* 面板切换 */
--duration-slow: 500ms;      /* AI状态切换 */
--duration-story: 800ms;     /* 内容涌现 */
--duration-complex: 1200ms;  /* 版本切换 */
```

#### 缓动函数

```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.4, 0.0, 0.6, 1);
```

#### 关键动画

**AI思考动画**:
```css
@keyframes thinking-particles {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.5; }
}
```

**内容涌现动画**:
```css
@keyframes content-emerge {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
    filter: blur(10px);
  }
  60% { opacity: 1; filter: blur(0); }
  100% { transform: scale(1) translateY(0); }
}
```

**置信度脉冲**:
```css
@keyframes confidence-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

/* 根据置信度调整速度 */
.confidence-high { animation: confidence-pulse 3s infinite; }
.confidence-medium { animation: confidence-pulse 1.5s infinite; }
.confidence-low { animation: confidence-pulse 0.8s infinite; }
```

---

## 6. 组件库

### 6.1 AI对话组件

#### MessageBubble（消息气泡）

```typescript
interface MessageBubble {
  type: 'user' | 'ai' | 'system';
  content: string | ReactNode;
  timestamp?: Date;
  confidence?: number; // AI消息专用
  thinking?: ThinkingProcess;
  actions?: Action[];
}
```

**视觉规范**:
```css
/* 用户消息 */
.message-user {
  background: var(--human-surface);
  border: 1px solid var(--human-border);
  border-radius: 16px 16px 4px 16px;
  padding: var(--space-4);
  max-width: 80%;
  align-self: flex-end;
}

/* AI消息 */
.message-ai {
  background: var(--ai-surface);
  border: 1px solid var(--ai-border);
  border-radius: 16px 16px 16px 4px;
  padding: var(--space-4);
  max-width: 85%;
  align-self: flex-start;
  font-family: var(--font-humanist);
  font-size: var(--text-lg);
  box-shadow: var(--shadow-ai-glow);
}
```

#### ThinkingIndicator（AI思考指示器）

```typescript
interface ThinkingIndicator {
  state: AIState;
  currentStep?: string;
  progress?: number;
  estimatedTime?: number;
  steps?: ThinkingStep[];
}
```

**视觉规范**:
```css
.thinking-indicator {
  padding: var(--space-6);
  background: var(--ai-surface);
  border: 1px solid var(--ai-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-ai-glow);
  animation: thinking-particles 2s infinite;
}

.thinking-step.in-progress {
  color: var(--ai-primary);
  font-weight: var(--font-medium);
}

.thinking-step.completed {
  color: var(--status-success);
}
```

#### ConfidenceIndicator（置信度指示器）

```typescript
interface ConfidenceIndicator {
  value: number; // 0-100
  threshold?: { high: 90, medium: 70 };
  variant?: 'minimal' | 'standard' | 'detailed';
}
```

**视觉规范**:
```css
.confidence-indicator {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
}

.confidence-high {
  background: rgba(16, 185, 129, 0.1);
  color: var(--status-success);
}

.confidence-medium {
  background: rgba(245, 158, 11, 0.1);
  color: var(--status-warning);
}

.confidence-low {
  background: rgba(249, 115, 22, 0.1);
  color: var(--status-error);
}
```

### 6.2 内容生成组件

#### GenerationPreview（生成预览卡片）

```typescript
interface GenerationPreview {
  id: string;
  type: 'design' | 'code' | 'text';
  thumbnail?: string;
  title: string;
  confidence?: number;
  metadata?: {
    estimated_quality?: number;
    tags?: string[];
  };
  actions: Action[];
  status: 'generating' | 'ready' | 'error';
}
```

**视觉规范**:
```css
.generation-preview {
  padding: var(--space-6);
  background: var(--ai-surface);
  border: 2px solid var(--ai-border);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-ai-glow);
  cursor: pointer;
  transition: all 0.3s;
}

.generation-preview:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-ai-strong);
}

.generation-preview.recommended::before {
  content: '⭐ 推荐';
  position: absolute;
  top: 12px;
  right: 12px;
  padding: var(--space-1) var(--space-3);
  background: var(--ai-primary);
  color: white;
  border-radius: var(--radius-full);
}
```

### 6.3 精化控制组件

#### RefinementToolbar（精化工具栏）

```typescript
interface RefinementToolbar {
  target: 'text' | 'design' | 'code';
  quickActions: RefinementAction[];
  onRefine: (action: string, params?: any) => void;
}

interface RefinementAction {
  id: string;
  label: string;
  category: 'tone' | 'length' | 'style' | 'structure';
}
```

**视觉规范**:
```css
.refinement-toolbar {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-3);
  background: var(--human-surface-elevated);
  border-radius: var(--radius-lg);
  margin-top: var(--space-4);
}

.refinement-button {
  padding: var(--space-2) var(--space-4);
  background: white;
  border: 1px solid var(--human-border);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  transition: all 0.2s;
}

.refinement-button:hover {
  border-color: var(--human-primary);
  color: var(--human-primary);
  transform: translateY(-1px);
}
```

#### VersionTree（版本树）

```typescript
interface VersionTree {
  root: Version;
  currentVersion: string;
  onVersionSelect: (id: string) => void;
}

interface Version {
  id: string;
  parentId?: string;
  timestamp: Date;
  label?: string;
  children?: Version[];
}
```

**视觉规范**:
```css
.version-tree {
  padding: var(--space-6);
  background: var(--human-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--human-border);
  max-height: 600px;
  overflow-y: auto;
}

.version-node {
  padding: var(--space-4);
  margin-bottom: var(--space-3);
  background: var(--human-surface-elevated);
  border: 2px solid var(--human-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
}

.version-node.active {
  border-color: var(--human-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.version-branch {
  padding-left: var(--space-8);
  margin-left: var(--space-4);
  border-left: 2px solid var(--human-border);
}
```

### 6.4 输入组件

#### AICommandInput（AI命令输入框）

```typescript
interface AICommandInput {
  placeholder?: string;
  multiline?: boolean;
  suggestions?: Suggestion[];
  attachments?: boolean;
  voiceInput?: boolean;
  onSubmit: (content: string) => void;
}
```

**视觉规范**:
```css
.ai-command-input {
  display: flex;
  align-items: flex-end;
  gap: var(--space-3);
  padding: var(--space-4);
  background: white;
  border: 2px solid var(--human-border);
  border-radius: var(--radius-xl);
  transition: all 0.2s;
}

.ai-command-input:focus-within {
  border-color: var(--ai-primary);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.input-textarea {
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  min-height: 24px;
  max-height: 200px;
}

.input-submit-button {
  width: 40px;
  height: 40px;
  background: var(--human-primary);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.2s;
}

.input-submit-button:hover {
  background: var(--human-primary-dark);
  transform: scale(1.05);
}
```

---

## 7. Design Tokens

完整的Design Tokens定义请参考: `emergence-tokens.json`

### 7.1 Token结构

```javascript
{
  "color": { ... },
  "typography": { ... },
  "spacing": { ... },
  "sizing": { ... },
  "radius": { ... },
  "shadow": { ... },
  "animation": { ... },
  "zIndex": { ... },
  "opacity": { ... }
}
```

### 7.2 关键Token

```javascript
// 颜色语义映射
semantic: {
  human: { primary, surface, border, text... },
  ai: { primary, surface, glow, thinking... },
  collaboration: { primary, surface },
  status: { success, warning, error },
  confidence: { high, medium, low }
}

// 动画时长
duration: {
  instant: 100ms,
  fast: 200ms,
  normal: 300ms,
  story: 800ms
}

// 间距单位
spacing: { 1-24 } // 基于8px网格
```

---

## 8. 跨平台适配

### 8.1 平台特性对比

| 特性 | Desktop | Laptop | Tablet | Mobile |
|------|---------|--------|--------|--------|
| **布局** | 70/30分屏 | 60/40分屏 | 上下分屏 | 全屏AI |
| **GUI工具栏** | 固定侧边 | 可折叠 | 抽屉 | 底部抽屉 |
| **AI密度** | Copilot | Copilot | Canvas | 全屏 |
| **主交互** | 鼠标+键盘 | 鼠标+键盘 | 触控 | 触控 |
| **快捷键** | 完整 | 完整 | 有限 | 无 |

### 8.2 响应式断点

```javascript
breakpoints: {
  mobile: '0-767px',
  tablet: '768-1023px',
  laptop: '1024-1439px',
  desktop: '1440px+',
  ultrawide: '1920px+',
}
```

### 8.3 平台特定组件

**Desktop专有**:
- 多窗口布局
- Hover工具提示
- 键盘快捷键提示

**Mobile专有**:
- 底部抽屉
- 拖动手柄
- 拇指区域优化（44px最小触控）

### 8.4 性能优化

```javascript
guidelines: {
  images: 'WebP + lazy loading',
  animation: 'GPU加速（transform, opacity）',
  aiResponse: '流式加载 + 骨架屏',
  mobile: '移除300ms延迟 + passive listeners'
}
```

---

## 9. 实施指南

### 9.1 开发优先级

**Phase 1: MVP（核心AI交互）**
- ✅ 70/30布局框架
- ✅ 基础对话界面
- ✅ AI思考可视化
- ✅ 简单生成预览
- ✅ 基础精化工具

**Phase 2: 增强交互**
- ✅ ⌘+K快捷调用
- ✅ Refinement工具栏
- ✅ 版本历史树
- ✅ 置信度可视化

**Phase 3: 跨平台**
- ✅ Mobile适配
- ✅ Tablet适配
- ✅ 响应式优化

**Phase 4: 高级特性**
- ✅ 多人协作
- ✅ 跨设备同步
- ✅ 本地AI推理

### 9.2 质量检查清单

**视觉一致性**:
- [ ] 所有AI内容使用渐变+半透明
- [ ] 所有人类内容使用纯色+实线
- [ ] 置信度低于70%必须显示警告
- [ ] 思考动画时长与处理时间同步

**交互一致性**:
- [ ] Tab键始终接受AI建议
- [ ] Esc键始终拒绝/退出
- [ ] ⌘+K始终触发inline编辑
- [ ] 所有AI操作可撤销

**跨平台一致性**:
- [ ] 核心功能在所有平台可用
- [ ] 手势与平台习惯匹配
- [ ] 触控目标≥44px（移动端）

### 9.3 可访问性要求

```javascript
a11y: {
  colorContrast: 'WCAG AA (4.5:1)',
  keyboardNav: '所有功能可键盘操作',
  screenReader: 'ARIA标签完整',
  reducedMotion: '尊重prefers-reduced-motion',
  focusVisible: '焦点状态清晰可见'
}
```

### 9.4 设计文件组织

```
/design-system
  /tokens
    - emergence-tokens.json
    - platform-overrides.json
  /components
    - ai-components.figma
    - gui-components.figma
  /examples
    - desktop-layout.figma
    - mobile-layout.figma
  /documentation
    - EMERGENCE_DESIGN_LANGUAGE_v3.md (本文档)
```

---

## 10. Claude Code Skill

### 10.1 EMERGENCE Design Skill

**专为 Claude Code 优化的设计系统 Skill**

当开发者使用 Claude Code 时，只需说：
- "创建 AI 对话界面"
- "显示 AI 置信度"
- "添加 AI 思考指示器"

Claude Code 会自动：
1. ✅ 读取 EMERGENCE 设计规范
2. ✅ 选择合适的模板/组件
3. ✅ 应用三层颜色系统
4. ✅ 生成完整、可运行的代码
5. ✅ 自动质量检查

### 10.2 Skill 文件结构

```
skills/emergence-design-skill/
├── SKILL.md                  # 主入口文件
├── components/               # 组件库
│   ├── ai-message-bubble.html
│   ├── confidence-indicator.html
│   ├── thinking-indicator.html
│   └── ...
├── templates/                # 完整场景模板
│   ├── ai-chat-page.html
│   ├── ai-editor.html
│   └── ...
├── rules/                    # 决策规则
│   ├── component-selection.md
│   ├── color-decision.md
│   ├── layout-rules.md
│   └── accessibility-rules.md
└── QUICK_REFERENCE_FOR_SKILL.md
```

### 10.3 快速开始

#### 方式 1: 通过 Claude Code

```
用户: "创建一个 AI 对话界面"
Claude Code: [自动生成完整代码]
```

#### 方式 2: 手动使用

```bash
# 1. 查看模板
open skills/emergence-design-skill/templates/ai-chat-page.html

# 2. 复制代码到项目
cp skills/emergence-design-skill/templates/ai-chat-page.html your-project/

# 3. 根据需求自定义
```

### 10.4 核心特性

- ✅ **自动决策** - AI 自动判断使用什么组件/模板
- ✅ **100% 完整** - 生成的代码可直接运行
- ✅ **质量保证** - 内置质量检查清单
- ✅ **规范合规** - 严格遵循 EMERGENCE 设计语言

### 10.5 支持的场景

| 场景 | 模板/组件 | 完成度 |
|------|----------|--------|
| AI 对话界面 | ai-chat-page.html | ✅ 100% |
| 置信度显示 | confidence-indicator.html | ✅ 100% |
| AI 思考过程 | thinking-indicator.html | ✅ 100% |
| AI 编辑器 | ai-editor.html | ⏳ 计划中 |
| AI 数据分析 | ai-dashboard.html | ⏳ 计划中 |

### 10.6 相关文档

- **Skill 主文件**: `skills/emergence-design-skill/SKILL.md`
- **快速参考**: `skills/emergence-design-skill/QUICK_REFERENCE_FOR_SKILL.md`
- **组件索引**: `skills/emergence-design-skill/components/README.md`
- **模板索引**: `skills/emergence-design-skill/templates/README.md`

---

## 附录

### A. 术语表

- **AI-first**: AI交互占据主要空间和流程
- **Ghost Mode**: AI几乎不可见，仅inline提示
- **Copilot Mode**: AI侧边栏辅助，70/30布局
- **Canvas Mode**: 无限画布，AI和人类共同创作
- **Refinement Loop**: 精化迭代机制
- **Confidence Indicator**: 置信度可视化

### B. 参考资源

- **灵感来源**: OpenAI Canvas, Cursor IDE, Miro AI, Notion AI
- **技术标准**: WCAG 2.1, Material Design 3, Apple HIG
- **字体**: Inter, Nunito, JetBrains Mono
- **图标**: 自定义AI图标库

### C. 版本历史

- **v3.0.0** (2025-01-17): AI-first完整版本
- **v2.0.0** (2025-01-16): 添加协作感知AI
- **v1.0.0** (2025-01-15): 初始版本

---

## 联系与反馈

**设计团队**: AI Design Language Team
**维护者**: Emergence Design System
**更新频率**: 每季度审查
**反馈渠道**: design-system@emergence.ai

---

**© 2025 Emergence Design Language. All rights reserved.**
