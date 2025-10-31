# ZeroAI-UI + uni-app 集成指南

> 如何在 uni-app 项目中使用 ZeroAI-UI 设计规范
>
> Version: 5.0.0
> Last Updated: 2025-01-31

---

## 🎯 概述

ZeroAI-UI v5.0 是**框架无关的设计规范**，提供 Design Tokens + 设计决策规则，让你在 uni-app 项目中使用标准的 uni-app 组件，同时遵循 ZeroAI-UI 的 AI-Native 设计语言。

**核心理念**：
```
ZeroAI-UI = 设计规范（颜色、间距、视觉层次）
uni-app = 组件实现（view, button, text 等）

结合 = uni-app 组件 + ZeroAI-UI 设计风格
```

---

## 🚀 快速开始

### Step 1: 安装 uni-app 项目

```bash
# 使用 HBuilderX 创建项目（推荐）
# 1. 打开 HBuilderX
# 2. 文件 -> 新建 -> 项目 -> uni-app
# 3. 选择 Vue3 模板

# 或使用命令行（需要 Node.js）
npx degit dcloudio/uni-preset-vue#vite-ts my-project
cd my-project
npm install
```

### Step 2: 集成 ZeroAI-UI Design Tokens

#### 方法 1：使用 CSS Variables（推荐）

```bash
# 1. 复制 tokens/css-variables.css 到你的项目
cp path/to/ZeroAI-UI/tokens/css-variables.css src/static/styles/

# 2. 在 App.vue 中导入
```

```vue
<!-- App.vue -->
<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
</script>

<style>
@import './static/styles/css-variables.css';
</style>
```

#### 方法 2：使用 Tailwind CSS（Vite 版本）

```bash
# 1. 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2. 复制 ZeroAI-UI 的 tailwind.config.js
cp path/to/ZeroAI-UI/tokens/tailwind.config.js ./tailwind.config.js

# 3. 在 main.ts 中导入
```

```typescript
// main.ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
```

---

## 📱 使用 ZeroAI-UI 设计规范

### 1. 三层视觉系统

#### Human Layer（用户操作）

```vue
<template>
  <!-- 使用 CSS Variables -->
  <button
    class="user-button"
    @click="saveProfile"
  >
    保存个人资料
  </button>
</template>

<style scoped>
.user-button {
  background: var(--human-primary);
  color: white;
  min-height: var(--touch-target-min); /* 48px */
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: none;
}
</style>
```

```vue
<!-- 使用 Tailwind CSS -->
<template>
  <button class="bg-human-primary text-white touch-target px-md rounded-md">
    保存个人资料
  </button>
</template>
```

#### AI Layer（AI 生成内容）

```vue
<template>
  <!-- AI 消息气泡（渐变 + 光晕） -->
  <view class="ai-bubble">
    <text>{{ message }}</text>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<style scoped>
.ai-bubble {
  background: var(--ai-gradient-primary);
  box-shadow: var(--shadow-ai);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  color: white;
}
</style>
```

```vue
<!-- 使用 Tailwind -->
<template>
  <div class="bg-ai-gradient shadow-ai px-md py-md rounded-lg text-white">
    {{ message }}
  </div>
</template>
```

#### Collaboration Layer（人机协作）

```vue
<template>
  <!-- 混合风格按钮 -->
  <button class="collab-button">
    <text>💡 AI 辅助编辑</text>
  </button>
</template>

<style scoped>
.collab-button {
  background: var(--collaboration-gradient);
  color: white;
  min-height: var(--touch-target-min);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  border: none;
}
</style>
```

---

### 2. 移动端触摸规范

#### 触摸热区（≥48px）

```vue
<template>
  <!-- ❌ 错误：触摸热区太小 -->
  <button style="width: 32px; height: 32px;">
    ×
  </button>

  <!-- ✅ 正确：使用标准触摸热区 -->
  <button class="touch-target">
    ×
  </button>
</template>

<style scoped>
.touch-target {
  min-width: var(--touch-target-min); /* 48px */
  min-height: var(--touch-target-min); /* 48px */
}
</style>
```

#### 底部导航（使用 uni-app tabBar）

```json
// pages.json
{
  "tabBar": {
    "color": "#6B7280",
    "selectedColor": "#2563EB",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "static/home.png",
        "selectedIconPath": "static/home-active.png"
      },
      {
        "pagePath": "pages/category/category",
        "text": "分类",
        "iconPath": "static/category.png",
        "selectedIconPath": "static/category-active.png"
      },
      {
        "pagePath": "pages/ai/ai",
        "text": "AI助手",
        "iconPath": "static/ai.png",
        "selectedIconPath": "static/ai-active.png"
      },
      {
        "pagePath": "pages/profile/profile",
        "text": "我的",
        "iconPath": "static/profile.png",
        "selectedIconPath": "static/profile-active.png"
      }
    ]
  }
}
```

**自定义底部导航（更灵活）**：

```vue
<template>
  <view class="bottom-nav">
    <view
      v-for="(tab, index) in tabs"
      :key="index"
      class="nav-item"
      @click="switchTab(index)"
    >
      <view
        class="nav-icon"
        :style="{
          backgroundColor: activeTab === index
            ? 'var(--human-primary)'
            : 'var(--human-text-secondary)'
        }"
      />
      <text
        class="nav-label"
        :style="{
          color: activeTab === index
            ? 'var(--human-primary)'
            : 'var(--human-text-secondary)'
        }"
      >
        {{ tab.label }}
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)
const tabs = [
  { label: '首页' },
  { label: '分类' },
  { label: 'AI助手' },
  { label: '我的' }
]

const switchTab = (index: number) => {
  activeTab.value = index
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: var(--human-surface);
  border-top: 1px solid var(--human-border);
  padding-bottom: env(safe-area-inset-bottom); /* iOS 安全区域 */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-sm);
  min-height: var(--touch-target-min); /* 48px */
  flex: 1;
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.nav-label {
  font-size: var(--font-size-xs);
  margin-top: 4px;
}
</style>
```

---

### 3. 响应式布局（Mobile-First）

```vue
<template>
  <view class="responsive-grid">
    <view
      v-for="item in products"
      :key="item.id"
      class="grid-item"
    >
      <!-- 商品内容 -->
    </view>
  </view>
</template>

<style scoped>
.responsive-grid {
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-md);

  /* Mobile: 2 列（xs & sm: 0-767px） */
  grid-template-columns: repeat(2, 1fr);
}

/* Tablet: 3 列（md: 768-1023px） */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop: 4 列（lg+: 1024px+） */
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
```

---

## 🎨 常见场景示例

### 场景 1：AI 对话界面

```vue
<template>
  <view class="chat-container">
    <!-- 消息列表 -->
    <scroll-view
      class="message-list"
      scroll-y
      :scroll-into-view="scrollIntoView"
    >
      <view
        v-for="(msg, i) in messages"
        :key="i"
        class="message-wrapper"
        :class="msg.type === 'user' ? 'message-right' : 'message-left'"
      >
        <view
          class="message-bubble"
          :class="`bubble-${msg.type}`"
        >
          <text>{{ msg.text }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- 输入框 -->
    <view class="input-area safe-area-bottom">
      <input
        v-model="inputText"
        class="message-input"
        placeholder="输入消息..."
        @confirm="sendMessage"
      />
      <button
        class="send-button"
        @click="sendMessage"
      >
        发送
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Message {
  type: 'user' | 'ai'
  text: string
}

const messages = ref<Message[]>([
  { type: 'user', text: '你好' },
  { type: 'ai', text: '你好！我是 AI 助手' }
])

const inputText = ref('')
const scrollIntoView = ref('')

const sendMessage = () => {
  if (!inputText.value.trim()) return

  messages.value.push({
    type: 'user',
    text: inputText.value
  })

  inputText.value = ''

  // 模拟 AI 回复
  setTimeout(() => {
    messages.value.push({
      type: 'ai',
      text: '这是 AI 的回复'
    })
  }, 1000)
}
</script>

<style scoped>
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.message-list {
  flex: 1;
  padding: var(--spacing-md);
}

.message-wrapper {
  display: flex;
  margin-bottom: var(--spacing-md);
}

.message-left {
  justify-content: flex-start;
}

.message-right {
  justify-content: flex-end;
}

.message-bubble {
  max-width: 70%;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  color: white;
}

.bubble-user {
  background: var(--human-primary);
}

.bubble-ai {
  background: var(--ai-gradient-primary);
  box-shadow: var(--shadow-ai);
}

.input-area {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  border-top: 1px solid var(--human-border);
}

.message-input {
  flex: 1;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--human-border);
  font-size: var(--font-size-base); /* Mobile: 14px, Desktop: 16px */
}

.send-button {
  background: var(--ai-gradient-primary);
  color: white;
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
  border-radius: var(--radius-md);
  border: none;
}
</style>
```

### 场景 2：移动端商城首页

```vue
<template>
  <view class="shop-home">
    <!-- 轮播图 -->
    <swiper
      class="banner-swiper"
      indicator-dots
      autoplay
      :interval="3000"
      :duration="500"
    >
      <swiper-item
        v-for="(banner, i) in banners"
        :key="i"
      >
        <image
          :src="banner.image"
          class="banner-image"
          mode="aspectFill"
        />
      </swiper-item>
    </swiper>

    <!-- 分类网格 -->
    <view class="category-grid">
      <view
        v-for="category in categories"
        :key="category.id"
        class="category-item"
        @click="goToCategory(category.id)"
      >
        <view class="category-icon" />
        <text class="category-name">{{ category.name }}</text>
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="product-grid">
      <view
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @click="goToProduct(product.id)"
      >
        <image
          :src="product.image"
          class="product-image"
          mode="aspectFill"
        />
        <view class="product-info">
          <text class="product-name">{{ product.name }}</text>
          <text class="product-price">¥{{ product.price }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const banners = ref([
  { id: 1, image: '/static/banner1.jpg' },
  { id: 2, image: '/static/banner2.jpg' },
  { id: 3, image: '/static/banner3.jpg' }
])

const categories = ref([
  { id: 1, name: '手机' },
  { id: 2, name: '电脑' },
  { id: 3, name: '家电' },
  { id: 4, name: '服饰' },
  { id: 5, name: '美妆' }
])

const products = ref([
  { id: 1, name: '商品名称', price: 999, image: '/static/product1.jpg' },
  { id: 2, name: '商品名称', price: 999, image: '/static/product2.jpg' },
  { id: 3, name: '商品名称', price: 999, image: '/static/product3.jpg' },
  { id: 4, name: '商品名称', price: 999, image: '/static/product4.jpg' }
])

const goToCategory = (id: number) => {
  uni.navigateTo({
    url: `/pages/category/detail?id=${id}`
  })
}

const goToProduct = (id: number) => {
  uni.navigateTo({
    url: `/pages/product/detail?id=${id}`
  })
}
</script>

<style scoped>
.shop-home {
  background-color: var(--human-surface-sunken);
}

.banner-swiper {
  height: 200px;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--human-surface);
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: var(--touch-target-min); /* 48px */
}

.category-icon {
  width: 40px;
  height: 40px;
  background-color: var(--human-surface-elevated);
  border-radius: var(--radius-full);
}

.category-name {
  font-size: var(--font-size-xs);
  margin-top: 4px;
  color: var(--human-text-primary);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-md);
}

.product-card {
  background-color: var(--human-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.product-image {
  width: 100%;
  height: 150px;
}

.product-info {
  padding: var(--spacing-sm);
}

.product-name {
  font-size: var(--font-size-sm);
  color: var(--human-text-primary);
  display: block;
}

.product-price {
  color: var(--human-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-top: 4px;
  display: block;
}
</style>
```

---

## 📚 Design Tokens 参考

### 常用 CSS Variables

```css
/* 颜色 */
var(--human-primary)         /* #2563EB 人类操作主色 */
var(--ai-gradient-primary)   /* AI 渐变主色 */
var(--collaboration-gradient) /* 协作渐变 */

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
var(--shadow-ai)   /* AI 光晕 */

/* iOS 安全区域 */
env(safe-area-inset-top)
env(safe-area-inset-bottom)
```

---

## ✅ 最佳实践

### 1. 始终使用触摸热区

```vue
<!-- ✅ 所有可点击元素 -->
<button class="touch-target">点击</button>

<style scoped>
.touch-target {
  min-height: var(--touch-target-min);
}
</style>
```

### 2. 遵循三层视觉系统

```
用户输入/操作 → human-* 系列（纯色、实线）
AI 生成内容 → ai-* 系列（渐变、光晕）
人机协作 → collaboration-* 系列（混合）
```

### 3. Mobile-First 响应式

```css
/* 默认移动端样式 */
.component {
  font-size: var(--font-size-base); /* Mobile: 14px */
}

/* 桌面端增强 */
@media (min-width: 768px) {
  .component {
    font-size: 16px;
  }
}
```

### 4. iOS 安全区域适配

```vue
<style scoped>
.bottom-bar {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
```

### 5. uni-app 平台差异处理

```vue
<template>
  <view class="container">
    <!-- #ifdef H5 -->
    <view class="h5-only">H5 专用内容</view>
    <!-- #endif -->

    <!-- #ifdef APP-PLUS -->
    <view class="app-only">App 专用内容</view>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <view class="weixin-only">微信小程序专用内容</view>
    <!-- #endif -->
  </view>
</template>
```

---

## 🔧 uni-app 特定优化

### 1. rpx vs px 选择

```vue
<style scoped>
/* ✅ 使用 rpx 进行响应式布局 */
.responsive-element {
  width: 750rpx;  /* 屏幕宽度 */
  padding: 32rpx; /* 响应式间距 */
}

/* ✅ 使用 px 保持固定尺寸（如触摸热区） */
.fixed-element {
  min-height: 48px; /* 固定触摸热区 */
  font-size: 14px;  /* 固定字体大小 */
}
</style>
```

### 2. 使用 uni-ui 组件库

```bash
# 安装 uni-ui
npm install @dcloudio/uni-ui
```

```vue
<template>
  <!-- 使用 uni-ui + ZeroAI-UI 样式 -->
  <uni-card class="ai-card">
    <text class="ai-text">AI 生成的内容</text>
  </uni-card>
</template>

<style scoped>
.ai-card {
  background: var(--ai-gradient-primary);
  box-shadow: var(--shadow-ai);
}

.ai-text {
  color: white;
  font-family: var(--font-family-ai);
}
</style>
```

### 3. 性能优化

```vue
<script setup lang="ts">
// ✅ 使用组合式 API 和 Vue3 响应式
import { ref, computed } from 'vue'

const items = ref([])

// ✅ 计算属性缓存
const filteredItems = computed(() => {
  return items.value.filter(item => item.visible)
})
</script>

<template>
  <!-- ✅ 使用 v-for 的 key -->
  <view
    v-for="item in filteredItems"
    :key="item.id"
  >
    {{ item.name }}
  </view>
</template>
```

---

## 🚀 下一步

1. 查看 [MOBILE_INTERACTION_GUIDE.md](../docs/MOBILE_INTERACTION_GUIDE.md) - 完整移动端交互规范
2. 查看 [RESPONSIVE_SYSTEM.md](../docs/RESPONSIVE_SYSTEM.md) - 响应式系统
3. 查看 [AI_FRIENDLY_DESIGN_TOKENS.md](../docs/AI_FRIENDLY_DESIGN_TOKENS.md) - 完整 Design Tokens 文档
4. 查看 [uni-app 官方文档](https://uniapp.dcloud.net.cn/) - uni-app 开发指南

---

**ZeroAI-UI v5.0 - Framework-Agnostic Design System**
