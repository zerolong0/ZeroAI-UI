# ZeroAI-UI: 移动端交互规范

> **让 Claude Code 100% 理解移动端交互设计**
>
> Version: 1.0.0
> Last Updated: 2025-01-28
> Target: Web H5 / Hybrid App / PWA

---

## 🎯 核心理念

```
桌面端设计：鼠标点击（精确、小目标）
移动端设计：手指触摸（不精确、大目标、手势丰富）

ZeroAI-UI 移动端原则：
→ 触摸优先（Touch-First）
→ 手势自然（Gesture-Native）
→ 性能至上（60fps 流畅）
```

---

## 📐 1. 触摸热区尺寸标准

### 最小触摸目标尺寸

```css
:root {
  /* 触摸热区标准 */
  --touch-target-min: 48px;        /* ZeroAI-UI 标准（兼容性最佳）*/
  --touch-target-comfortable: 56px; /* 舒适尺寸 */
  --touch-target-spacious: 64px;    /* 宽松尺寸（老年人友好）*/

  /* 行业标准参考 */
  --ios-hig-min: 44px;              /* iOS Human Interface Guidelines */
  --material-min: 48px;             /* Material Design */
  --wcag-min: 44px;                 /* WCAG 2.1 AA 标准 */
}
```

### Claude Code 决策树

```javascript
// 触摸热区决策
function selectTouchSize(element, context) {
  // 优先级 1: 主要操作（必须大）
  if (element.isPrimaryAction) {
    return 'var(--touch-target-comfortable)' // 56px
  }

  // 优先级 2: 用户群体
  if (context.targetAudience === 'elderly') {
    return 'var(--touch-target-spacious)' // 64px
  }

  // 优先级 3: 元素类型
  if (element.type === 'icon-button') {
    return 'var(--touch-target-min)' // 48px（图标按钮）
  }

  if (element.type === 'text-button') {
    return 'min-height: var(--touch-target-min); padding: 12px 24px;'
  }

  // 默认：标准尺寸
  return 'var(--touch-target-min)' // 48px
}
```

### 实际应用示例

```html
<!-- ✅ 正确：符合 48px 标准 -->
<button style="min-width: 48px; min-height: 48px; padding: 12px;">
  操作
</button>

<!-- ❌ 错误：小于 48px -->
<button style="width: 32px; height: 32px;">
  ×
</button>

<!-- ✅ 正确修复：扩大热区 -->
<button style="width: 32px; height: 32px; padding: 8px;">
  <!-- 图标 32px + padding 8px*2 = 48px -->
  ×
</button>
```

---

## 🖐️ 2. 手势系统（6 种核心手势）

### 2.1 点击（Tap）- 最基础

```javascript
触发条件：单指快速触摸并抬起
用途：主要操作、链接跳转、按钮点击
反馈：100ms 内视觉反馈（波纹、高亮）
```

```css
/* 点击反馈动画 */
.touchable {
  position: relative;
  overflow: hidden;
  transition: background-color 100ms ease;
}

.touchable:active {
  background-color: rgba(0, 0, 0, 0.05);
}

/* 波纹效果（Material Design 风格）*/
.touchable::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
  transition: width 300ms, height 300ms;
}

.touchable:active::after {
  width: 200%;
  height: 200%;
}
```

---

### 2.2 长按（Long Press）- 上下文菜单

```javascript
触发条件：单指按住 500-800ms
用途：显示上下文菜单、复制文本、删除确认
反馈：震动反馈（Haptic Feedback）+ 菜单弹出
```

```javascript
// 长按检测（Vanilla JS）
let longPressTimer;

element.addEventListener('touchstart', (e) => {
  longPressTimer = setTimeout(() => {
    // 触发长按
    showContextMenu(e.touches[0].clientX, e.touches[0].clientY);

    // 震动反馈（如果支持）
    if (navigator.vibrate) {
      navigator.vibrate(50); // 震动 50ms
    }
  }, 500); // 500ms 长按阈值
});

element.addEventListener('touchend', () => {
  clearTimeout(longPressTimer); // 取消长按
});

element.addEventListener('touchmove', () => {
  clearTimeout(longPressTimer); // 移动取消长按
});
```

---

### 2.3 滑动（Swipe）- 导航/切换

```javascript
触发条件：单指快速滑动
方向：左、右、上、下
用途：
  - 左右滑动：切换 Tab、翻页、返回
  - 上下滑动：滚动列表
  - 左滑：删除列表项（iOS 风格）
速度阈值：> 0.5px/ms
距离阈值：> 50px
```

```javascript
// 滑动检测
let startX, startY, startTime;

element.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  startTime = Date.now();
});

element.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const endTime = Date.now();

  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const deltaTime = endTime - startTime;

  const speed = Math.abs(deltaX) / deltaTime; // px/ms

  // 水平滑动（左右）
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0 && speed > 0.5) {
      onSwipeRight(); // 右滑
    } else if (deltaX < 0 && speed > 0.5) {
      onSwipeLeft(); // 左滑
    }
  }

  // 垂直滑动（上下）
  if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
    if (deltaY > 0 && speed > 0.5) {
      onSwipeDown(); // 下滑
    } else if (deltaY < 0 && speed > 0.5) {
      onSwipeUp(); // 上滑
    }
  }
});
```

---

### 2.4 下拉刷新（Pull to Refresh）- 数据更新

```javascript
触发条件：在列表顶部下拉 > 80px
用途：刷新列表数据、更新内容
反馈：加载指示器 + "释放以刷新" 提示
```

```html
<div class="pull-refresh-container">
  <div class="refresh-indicator">
    <div class="spinner"></div>
    <span class="refresh-text">下拉刷新</span>
  </div>
  <div class="content">
    <!-- 列表内容 -->
  </div>
</div>
```

```javascript
// 下拉刷新实现
let isPulling = false;
let startY = 0;

const container = document.querySelector('.pull-refresh-container');
const indicator = document.querySelector('.refresh-indicator');
const content = document.querySelector('.content');

content.addEventListener('touchstart', (e) => {
  // 仅在列表顶部时启用
  if (content.scrollTop === 0) {
    isPulling = true;
    startY = e.touches[0].clientY;
  }
});

content.addEventListener('touchmove', (e) => {
  if (!isPulling) return;

  const currentY = e.touches[0].clientY;
  const pullDistance = currentY - startY;

  if (pullDistance > 0 && pullDistance < 150) {
    e.preventDefault();
    indicator.style.height = pullDistance + 'px';

    if (pullDistance > 80) {
      indicator.querySelector('.refresh-text').textContent = '释放以刷新';
    } else {
      indicator.querySelector('.refresh-text').textContent = '下拉刷新';
    }
  }
});

content.addEventListener('touchend', (e) => {
  if (!isPulling) return;

  const pullDistance = indicator.offsetHeight;

  if (pullDistance > 80) {
    // 触发刷新
    indicator.querySelector('.refresh-text').textContent = '正在刷新...';
    indicator.querySelector('.spinner').classList.add('spinning');

    // 模拟数据加载
    setTimeout(() => {
      indicator.style.height = '0';
      indicator.querySelector('.spinner').classList.remove('spinning');
    }, 2000);
  } else {
    // 取消刷新
    indicator.style.height = '0';
  }

  isPulling = false;
});
```

---

### 2.5 滑动删除（Swipe to Delete）- iOS 风格

```javascript
触发条件：列表项左滑 > 60px
用途：删除列表项、隐藏内容
反馈：删除按钮显示 + 震动
```

```html
<div class="swipeable-item">
  <div class="item-content">
    <span>列表项内容</span>
  </div>
  <div class="delete-action">
    <button class="delete-btn">删除</button>
  </div>
</div>
```

```css
.swipeable-item {
  position: relative;
  overflow: hidden;
}

.item-content {
  position: relative;
  background: white;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.delete-action {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background: #EF4444;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* 左滑显示删除按钮 */
.swipeable-item.swiped .item-content {
  transform: translateX(-80px);
}
```

---

### 2.6 双指缩放（Pinch to Zoom）- 非核心

```javascript
触发条件：双指缩放手势
用途：图片/地图缩放、Canvas 操作
优先级：低（特殊场景按需实现）
```

---

## 📱 3. 移动端专属组件（10 个核心组件）

### 3.1 底部导航栏（Bottom Navigation）

```html
<nav class="bottom-nav">
  <a href="#home" class="nav-item active">
    <svg class="nav-icon"><!-- 首页图标 --></svg>
    <span class="nav-label">首页</span>
  </a>
  <a href="#discover" class="nav-item">
    <svg class="nav-icon"><!-- 发现图标 --></svg>
    <span class="nav-label">发现</span>
  </a>
  <a href="#ai" class="nav-item nav-item-ai">
    <div class="fab-icon">
      <svg><!-- AI 图标 --></svg>
    </div>
  </a>
  <a href="#messages" class="nav-item">
    <svg class="nav-icon"><!-- 消息图标 --></svg>
    <span class="nav-label">消息</span>
  </a>
  <a href="#profile" class="nav-item">
    <svg class="nav-icon"><!-- 我的图标 --></svg>
    <span class="nav-label">我的</span>
  </a>
</nav>
```

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: white;
  border-top: 1px solid #E5E7EB;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom); /* iOS 刘海屏适配 */
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  color: #6B7280;
  text-decoration: none;
  transition: color 200ms;
}

.nav-item.active {
  color: #2563EB;
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.nav-label {
  font-size: 12px;
}

/* AI 中心按钮（FAB 风格）*/
.nav-item-ai {
  position: relative;
  margin-top: -24px;
}

.fab-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--ai-gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-ai-glow);
}
```

---

### 3.2 顶部导航栏（Top Bar with Back）

```html
<header class="top-bar">
  <button class="back-btn" onclick="history.back()">
    <svg><!-- 返回图标 --></svg>
  </button>
  <h1 class="page-title">页面标题</h1>
  <button class="action-btn">
    <svg><!-- 更多图标 --></svg>
  </button>
</header>
```

```css
.top-bar {
  position: sticky;
  top: 0;
  height: 56px;
  background: white;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  padding-top: env(safe-area-inset-top); /* iOS 状态栏适配 */
  z-index: 100;
}

.back-btn,
.action-btn {
  min-width: 48px;
  min-height: 48px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  text-align: center;
  margin: 0 8px;
}
```

---

### 3.3 动作面板（Action Sheet）

```html
<div class="action-sheet-overlay" onclick="closeActionSheet()">
  <div class="action-sheet" onclick="event.stopPropagation()">
    <div class="action-header">
      <h3>选择操作</h3>
    </div>
    <button class="action-item">
      <svg class="action-icon"><!-- 图标 --></svg>
      <span>分享</span>
    </button>
    <button class="action-item">
      <svg class="action-icon"><!-- 图标 --></svg>
      <span>复制链接</span>
    </button>
    <button class="action-item action-destructive">
      <svg class="action-icon"><!-- 图标 --></svg>
      <span>删除</span>
    </button>
    <button class="action-cancel" onclick="closeActionSheet()">
      取消
    </button>
  </div>
</div>
```

```css
.action-sheet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  animation: fadeIn 200ms ease;
}

.action-sheet {
  width: 100%;
  background: white;
  border-radius: 16px 16px 0 0;
  padding-bottom: env(safe-area-inset-bottom);
  animation: slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.action-header {
  padding: 16px;
  border-bottom: 1px solid #E5E7EB;
}

.action-item {
  width: 100%;
  height: 56px;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  font-size: 16px;
  color: #111827;
}

.action-item:active {
  background: #F3F4F6;
}

.action-destructive {
  color: #EF4444;
}

.action-cancel {
  width: 100%;
  height: 56px;
  border: none;
  background: white;
  border-top: 8px solid #F3F4F6;
  font-size: 16px;
  font-weight: 600;
  color: #2563EB;
}
```

---

### 3.4 其他移动端组件（简要说明）

```markdown
4. Toast 提示 - 轻量级消息提示（3s 自动消失）
5. 全屏加载 - 页面级加载指示器
6. 空状态 - 无数据时的占位界面
7. 浮动按钮（FAB）- 主要操作按钮（右下角）
8. 抽屉（Drawer）- 侧边栏菜单
9. 上拉加载 - 列表底部加载更多
10. 骨架屏 - 加载中占位（优于 Loading Spinner）
```

---

## ⚡ 4. 性能优化规范（60fps 流畅）

### 4.1 使用 CSS Transform（硬件加速）

```css
/* ❌ 避免：触发重排 */
.element {
  position: absolute;
  left: 100px;
  transition: left 300ms;
}

/* ✅ 推荐：GPU 加速 */
.element {
  transform: translateX(100px);
  transition: transform 300ms;
}
```

### 4.2 触摸反馈延迟优化

```css
/* 移除 300ms 点击延迟 */
* {
  touch-action: manipulation; /* 禁用双击缩放，移除延迟 */
}

/* 或者使用 viewport meta */
/* <meta name="viewport" content="width=device-width, user-scalable=no"> */
```

### 4.3 图片优化

```html
<!-- WebP 格式 + 懒加载 -->
<img
  src="placeholder.jpg"
  data-src="image.webp"
  loading="lazy"
  alt="描述"
>
```

### 4.4 性能指标

```javascript
目标性能指标：
- 首屏加载（FCP）: < 1.5s
- 可交互时间（TTI）: < 3s
- 触摸响应延迟: < 100ms
- 滚动帧率: 60fps（16.6ms/帧）
- 动画帧率: 60fps
```

---

## 🤖 Claude Code 决策流程

### 识别移动端场景

```javascript
function isMobileContext(userRequest) {
  const mobileKeywords = [
    'h5', 'mobile', 'app', '移动端', '手机',
    '触摸', '手势', '底部导航', '下拉刷新'
  ];

  return mobileKeywords.some(keyword =>
    userRequest.toLowerCase().includes(keyword)
  );
}
```

### 自动应用移动端规范

```javascript
if (isMobileContext(userRequest)) {
  // 1. 应用触摸热区标准
  minButtonSize = 48; // px

  // 2. 添加移动端 viewport
  addMetaTag('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

  // 3. 使用移动端组件
  if (needsNavigation) {
    useComponent('bottom-navigation'); // 优先底部导航
  }

  // 4. 添加触摸手势支持
  if (needsRefresh) {
    addFeature('pull-to-refresh');
  }

  // 5. 性能优化
  useTransformInsteadOfPosition();
  enableLazyLoading();
  optimizeImages('webp');

  // 6. iOS 适配
  addSafeAreaSupport();
}
```

---

## 📊 移动端检查清单

```markdown
生成移动端页面时，Claude Code 必须验证：

触摸目标：
- [ ] 所有按钮 ≥ 48x48px
- [ ] 主要操作按钮 ≥ 56x56px
- [ ] 链接间距 ≥ 8px

手势支持：
- [ ] 点击有 100ms 内反馈
- [ ] 列表支持下拉刷新（如需要）
- [ ] 长按显示上下文菜单（如需要）

组件适配：
- [ ] 使用底部导航（非顶部 Tab）
- [ ] 顶部栏包含返回按钮
- [ ] 表单输入框高度 ≥ 48px

性能：
- [ ] 使用 transform 动画
- [ ] 图片懒加载
- [ ] 移除 300ms 点击延迟

iOS 适配：
- [ ] safe-area-inset 支持
- [ ] 刘海屏/底部横条适配
```

---

## 📚 参考资源

- **iOS Human Interface Guidelines**: https://developer.apple.com/design/human-interface-guidelines/
- **Material Design (Mobile)**: https://m3.material.io/
- **WCAG 2.1 触摸目标**: https://www.w3.org/WAI/WCAG21/Understanding/target-size.html

---

**版本**: 1.0.0
**最后更新**: 2025-01-28
**适用范围**: Web H5 / Hybrid App / PWA

---

**© 2025 ZeroAI-UI Design System · Mobile-First · AI-Friendly**
