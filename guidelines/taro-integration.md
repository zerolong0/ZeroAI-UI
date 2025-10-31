# ZeroAI-UI + Taro 集成指南

> 如何在 Taro 4.0 项目中使用 ZeroAI-UI 设计规范
>
> Version: 5.0.0
> Last Updated: 2025-01-31

---

## 🎯 概述

ZeroAI-UI v5.0 是**框架无关的设计规范**，提供 Design Tokens + 设计决策规则，让你在 Taro 项目中使用标准的 Taro UI 组件，同时遵循 ZeroAI-UI 的 AI-Native 设计语言。

**核心理念**：
```
ZeroAI-UI = 设计规范（颜色、间距、视觉层次）
Taro UI = 组件实现（Button, View, Text 等）

结合 = Taro 组件 + ZeroAI-UI 设计风格
```

---

## 🚀 快速开始

### Step 1: 安装 Taro 项目

```bash
# 安装 Taro CLI
npm install -g @tarojs/cli

# 创建项目（选择 React + TypeScript）
taro init myProject

cd myProject
```

### Step 2: 集成 ZeroAI-UI Design Tokens

#### 方法 1：使用 CSS Variables（推荐）

```bash
# 1. 复制 tokens/css-variables.css 到你的项目
cp path/to/ZeroAI-UI/tokens/css-variables.css src/styles/

# 2. 在 app.tsx 中导入
```

```tsx
// src/app.tsx
import './styles/css-variables.css'

function App({ children }) {
  return children
}

export default App
```

#### 方法 2：使用 Tailwind CSS

```bash
# 1. 安装 Tailwind CSS for Taro
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# 2. 复制 ZeroAI-UI 的 tailwind.config.js
cp path/to/ZeroAI-UI/tokens/tailwind.config.js ./tailwind.config.js

# 3. 配置 postcss
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```tsx
// src/app.tsx
import 'tailwindcss/tailwind.css'
```

---

## 📱 使用 ZeroAI-UI 设计规范

### 1. 三层视觉系统

#### Human Layer（用户操作）

```tsx
// 使用 CSS Variables
import { View, Button, Text } from '@tarojs/components'

function UserProfileButton() {
  return (
    <Button
      style={{
        background: 'var(--human-primary)',
        color: 'white',
        minHeight: 'var(--touch-target-min)', // 48px
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      保存个人资料
    </Button>
  )
}
```

```tsx
// 使用 Tailwind CSS
<button className="bg-human-primary text-white touch-target px-md rounded-md">
  保存个人资料
</button>
```

#### AI Layer（AI 生成内容）

```tsx
// AI 消息气泡（Taobao Orange 纯色）
import { View, Text } from '@tarojs/components'

function AIChatBubble({ message }) {
  return (
    <View
      style={{
        background: 'var(--ai-primary)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-lg)',
        color: 'white',
      }}
    >
      <Text>{message}</Text>
    </View>
  )
}
```

```tsx
// 使用 Tailwind
<div className="bg-ai-primary px-md py-md rounded-lg text-white">
  {message}
</div>
```

#### Collaboration Layer（人机协作）

```tsx
// 混合风格按钮（纯色，无 emoji）
function CollaborationButton() {
  return (
    <Button
      style={{
        background: 'var(--collaboration-primary)',
        color: 'white',
        minHeight: 'var(--touch-target-min)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <Text>AI 辅助编辑</Text>
    </Button>
  )
}
```

---

### 2. 移动端触摸规范

#### 触摸热区（≥48px）

```tsx
// ❌ 错误：触摸热区太小
<Button style={{ width: '32px', height: '32px' }}>
  ×
</Button>

// ✅ 正确：使用标准触摸热区
<Button
  style={{
    minWidth: 'var(--touch-target-min)', // 48px
    minHeight: 'var(--touch-target-min)', // 48px
  }}
>
  ×
</Button>
```

#### 底部导航

```tsx
import { View, Image, Text } from '@tarojs/components'
import { useState } from 'react'

function BottomNavigation() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <View
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'var(--human-surface)',
        borderTop: '1px solid var(--human-border)',
        paddingBottom: 'env(safe-area-inset-bottom)', // iOS 安全区域
      }}
    >
      {['首页', '分类', 'AI助手', '我的'].map((label, index) => (
        <View
          key={index}
          onClick={() => setActiveTab(index)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 'var(--spacing-sm)',
            minHeight: 'var(--touch-target-min)', // 48px
            flex: 1,
          }}
        >
          <View
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: activeTab === index
                ? 'var(--human-primary)'
                : 'var(--human-text-secondary)',
            }}
          />
          <Text
            style={{
              fontSize: 'var(--font-size-xs)',
              color: activeTab === index
                ? 'var(--human-primary)'
                : 'var(--human-text-secondary)',
              marginTop: '4px',
            }}
          >
            {label}
          </Text>
        </View>
      ))}
    </View>
  )
}
```

---

### 3. 响应式布局（Mobile-First）

```tsx
// 使用 Taro 的 @media 查询
import { View } from '@tarojs/components'
import './index.scss'

function ResponsiveGrid() {
  return (
    <View className="responsive-grid">
      {/* 商品列表 */}
    </View>
  )
}
```

```scss
// index.scss
.responsive-grid {
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-md);

  // Mobile: 2 列（xs & sm: 0-767px）
  grid-template-columns: repeat(2, 1fr);

  // Tablet: 3 列（md: 768-1023px）
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Desktop: 4 列（lg+: 1024px+）
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 🎨 常见场景示例

### 场景 1：AI 对话界面

```tsx
// pages/chat/index.tsx
import { View, ScrollView, Input, Button } from '@tarojs/components'
import { useState } from 'react'

function ChatPage() {
  const [messages, setMessages] = useState([
    { type: 'user', text: '你好' },
    { type: 'ai', text: '你好！我是 AI 助手' },
  ])
  const [input, setInput] = useState('')

  return (
    <View style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 消息列表 */}
      <ScrollView
        style={{
          flex: 1,
          padding: 'var(--spacing-md)',
        }}
      >
        {messages.map((msg, i) => (
          <View
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            <View
              style={{
                maxWidth: '70%',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-lg)',
                background: msg.type === 'user'
                  ? 'var(--human-primary)'
                  : 'var(--ai-primary)',
                color: 'white',
              }}
            >
              {msg.text}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* 输入框 */}
      <View
        style={{
          display: 'flex',
          gap: 'var(--spacing-sm)',
          padding: 'var(--spacing-md)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          borderTop: '1px solid var(--human-border)',
        }}
      >
        <Input
          value={input}
          onInput={(e) => setInput(e.detail.value)}
          placeholder="输入消息..."
          style={{
            flex: 1,
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--human-border)',
            fontSize: 'var(--font-size-base)', // Mobile: 14px, Desktop: 16px
          }}
        />
        <Button
          style={{
            background: 'var(--ai-primary)',
            color: 'white',
            minWidth: 'var(--touch-target-min)',
            minHeight: 'var(--touch-target-min)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          发送
        </Button>
      </View>
    </View>
  )
}

export default ChatPage
```

### 场景 2：移动端商城首页

```tsx
// pages/shop/index.tsx
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'

function ShopHomePage() {
  return (
    <View>
      {/* 轮播图 */}
      <Swiper
        indicatorDots
        autoplay
        style={{
          height: '200px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <SwiperItem key={i}>
            <Image
              src={`banner${i}.jpg`}
              style={{ width: '100%', height: '100%' }}
            />
          </SwiperItem>
        ))}
      </Swiper>

      {/* 分类网格 */}
      <View
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'var(--spacing-md)',
          padding: 'var(--spacing-md)',
        }}
      >
        {['手机', '电脑', '家电', '服饰', '美妆'].map((name) => (
          <View
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 'var(--touch-target-min)', // 48px
            }}
          >
            <View
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--human-surface-elevated)',
                borderRadius: 'var(--radius-full)',
              }}
            />
            <Text style={{ fontSize: 'var(--font-size-xs)', marginTop: '4px' }}>
              {name}
            </Text>
          </View>
        ))}
      </View>

      {/* 商品列表 */}
      <View
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-md)',
          padding: 'var(--spacing-md)',
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <View
            key={i}
            style={{
              backgroundColor: 'var(--human-surface)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Image
              src={`product${i}.jpg`}
              style={{ width: '100%', height: '150px' }}
            />
            <View style={{ padding: 'var(--spacing-sm)' }}>
              <Text style={{ fontSize: 'var(--font-size-sm)' }}>商品名称</Text>
              <Text
                style={{
                  color: 'var(--human-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginTop: '4px',
                }}
              >
                ¥999
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default ShopHomePage
```

---

## 📚 Design Tokens 参考

### 常用 CSS Variables

```css
/* 颜色 - 纯色系统（无渐变）*/
var(--human-primary)         /* #737373 人类操作主色（蓝色）*/
var(--ai-primary)            /* #FF6600 AI 主色（Taobao Orange）*/
var(--collaboration-primary) /* #FF7A45 协作主色（蓝橙混合）*/

/* 间距 */
var(--spacing-xs)   /* 4px (Mobile: 3px) */
var(--spacing-sm)   /* 8px (Mobile: 6px) */
var(--spacing-md)   /* 16px (Mobile: 12px) */
var(--spacing-lg)   /* 24px (Mobile: 18px) */

/* 字体 */
var(--font-size-base)  /* 16px (Mobile: 14px) */
var(--font-family-ai)  /* Nunito for AI content */

/* 触摸热区 */
var(--touch-target-min)  /* 48px */

/* 圆角 */
var(--radius-md)   /* 8px */
var(--radius-lg)   /* 12px */

/* 阴影 */
var(--shadow-sm)   /* 标准阴影 */
var(--shadow-md)   /* 中等阴影 */

/* iOS 安全区域 */
env(safe-area-inset-top)
env(safe-area-inset-bottom)
```

---

## ✅ 最佳实践

### 1. 始终使用触摸热区

```tsx
// ✅ 所有可点击元素
<Button style={{ minHeight: 'var(--touch-target-min)' }}>
```

### 2. 遵循三层视觉系统

```
用户输入/操作 → human-* 系列（蓝色纯色）
AI 生成内容 → ai-* 系列（橙色纯色 - Taobao Orange）
人机协作 → collaboration-* 系列（蓝橙混合纯色）

注意：v5.1.0+ 全部使用纯色，禁止渐变和 emoji
```

### 3. Mobile-First 响应式

```scss
// 默认移动端样式
.component {
  font-size: var(--font-size-base); // Mobile: 14px
}

// 桌面端增强
@media (min-width: 768px) {
  .component {
    font-size: 16px;
  }
}
```

### 4. iOS 安全区域适配

```tsx
<View style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
  {/* 底部导航 */}
</View>
```

---

## 🚀 下一步

1. 查看 [MOBILE_INTERACTION_GUIDE.md](../docs/MOBILE_INTERACTION_GUIDE.md) - 完整移动端交互规范
2. 查看 [RESPONSIVE_SYSTEM.md](../docs/RESPONSIVE_SYSTEM.md) - 响应式系统
3. 查看 [AI_FRIENDLY_DESIGN_TOKENS.md](../docs/AI_FRIENDLY_DESIGN_TOKENS.md) - 完整 Design Tokens 文档

---

**ZeroAI-UI v5.0 - Framework-Agnostic Design System**
