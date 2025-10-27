# ZeroAI-UI: 响应式系统完善方案

> **从移动端到 4K 桌面的无缝适配**
>
> Version: 1.0.0
> Last Updated: 2025-01-28
> Philosophy: Mobile-First + Progressive Enhancement

---

## 🎯 核心理念

```
传统响应式：桌面优先，缩小适配移动端（Desktop → Mobile）
ZeroAI-UI 响应式：移动优先，渐进增强桌面端（Mobile → Desktop）

原因：
1. 移动端流量占比 60%+
2. 移动端约束更严格（强迫简化设计）
3. 从小屏扩展到大屏 > 从大屏压缩到小屏
```

---

## 📐 1. 断点系统（6 个精确断点）

### 断点定义

```css
:root {
  /* 断点定义（Mobile-First）*/
  --breakpoint-xs: 0px;       /* 超小屏：手机竖屏（<640px）*/
  --breakpoint-sm: 640px;     /* 小屏：手机横屏/小手机 */
  --breakpoint-md: 768px;     /* 中屏：平板竖屏 */
  --breakpoint-lg: 1024px;    /* 大屏：平板横屏/小笔记本 */
  --breakpoint-xl: 1280px;    /* 超大屏：桌面显示器 */
  --breakpoint-2xl: 1536px;   /* 超超大屏：大桌面/4K */

  /* 常见设备参考 */
  --device-iphone-se: 375px;        /* iPhone SE */
  --device-iphone-14: 390px;        /* iPhone 14 */
  --device-iphone-14-pro-max: 430px;/* iPhone 14 Pro Max */
  --device-ipad-mini: 744px;        /* iPad Mini */
  --device-ipad-pro: 1024px;        /* iPad Pro */
  --device-macbook-13: 1280px;      /* MacBook 13" */
  --device-macbook-16: 1728px;      /* MacBook 16" */
}
```

### Media Query 标准写法（Mobile-First）

```css
/* ===== Mobile First 策略 ===== */

/* 1. 基础样式（xs: 0-639px，默认移动端）*/
.container {
  width: 100%;
  padding: 16px;
  font-size: 14px;
}

/* 2. 小屏及以上（sm: 640px+）*/
@media (min-width: 640px) {
  .container {
    padding: 20px;
  }
}

/* 3. 中屏及以上（md: 768px+，平板）*/
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
    font-size: 16px; /* 恢复标准字号 */
  }
}

/* 4. 大屏及以上（lg: 1024px+，桌面）*/
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 32px;
  }
}

/* 5. 超大屏及以上（xl: 1280px+）*/
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 6. 超超大屏（2xl: 1536px+）*/
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

---

## 📦 2. 容器系统（Container）

### 容器最大宽度规则

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

/* xs/sm: 无最大宽度（100%）*/
@media (min-width: 640px) {
  .container {
    padding-left: 24px;
    padding-right: 24px;
  }
}

/* md: 最大 768px */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg: 最大 1024px */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl: 最大 1280px */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl: 最大 1536px */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

### Claude Code 决策

```javascript
function selectContainerWidth(breakpoint) {
  const widthMap = {
    'xs': '100%',         // 0-639px
    'sm': '100%',         // 640-767px
    'md': '768px',        // 768-1023px
    'lg': '1024px',       // 1024-1279px
    'xl': '1280px',       // 1280-1535px
    '2xl': '1536px'       // 1536px+
  };

  return widthMap[breakpoint];
}
```

---

## 🎨 3. 网格系统（Grid）

### 响应式列数

```css
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr); /* xs: 4 列（默认）*/
}

/* sm: 仍然 4 列（小屏）*/
@media (min-width: 640px) {
  .grid {
    gap: 20px;
  }
}

/* md: 8 列（平板）*/
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
  }
}

/* lg: 12 列（桌面）*/
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;
  }
}

/* xl/2xl: 保持 12 列 */
```

### 网格跨列规则

```css
/* 响应式卡片：自适应列数 */
.card {
  grid-column: span 4; /* xs/sm: 占满全宽（4/4）*/
}

@media (min-width: 768px) {
  .card {
    grid-column: span 4; /* md: 占一半（4/8）*/
  }
}

@media (min-width: 1024px) {
  .card {
    grid-column: span 4; /* lg/xl: 占 1/3（4/12）*/
  }

  .card-wide {
    grid-column: span 6; /* 宽卡片占 1/2（6/12）*/
  }
}
```

### Claude Code 决策

```javascript
function selectGridColumns(breakpoint, elementType) {
  // 总列数
  const totalColumns = {
    'xs': 4,
    'sm': 4,
    'md': 8,
    'lg': 12,
    'xl': 12,
    '2xl': 12
  };

  // 元素默认跨列
  const spanMap = {
    'card': { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 },       // 卡片：全宽 → 半宽 → 1/3
    'sidebar': { xs: 4, sm: 4, md: 8, lg: 3, xl: 3 },    // 侧边栏：全宽 → 1/4
    'main-content': { xs: 4, sm: 4, md: 8, lg: 9, xl: 9 } // 主内容：全宽 → 3/4
  };

  return {
    total: totalColumns[breakpoint],
    span: spanMap[elementType][breakpoint]
  };
}
```

---

## 📝 4. 响应式字号系统

### 字号缩放策略

```
策略：移动端字号缩小 10-15%（节省空间 + 避免过大）

基础字号：
- xs/sm: 14px（移动端）
- md+:   16px（桌面端）

标题字号：等比缩放
- xs/sm: 缩小 15%
- md+:   标准尺寸
```

### 实际应用

```css
:root {
  /* 移动端字号（xs/sm）*/
  --text-xs: 11px;      /* 缩小自 12px */
  --text-sm: 13px;      /* 缩小自 14px */
  --text-base: 14px;    /* 缩小自 16px ⭐ */
  --text-lg: 16px;      /* 缩小自 18px */
  --text-xl: 18px;      /* 缩小自 20px */
  --text-2xl: 20px;     /* 缩小自 24px */
  --text-3xl: 26px;     /* 缩小自 30px */
  --text-4xl: 32px;     /* 缩小自 36px */
  --text-5xl: 40px;     /* 缩小自 48px */
}

/* md 及以上：恢复标准字号 */
@media (min-width: 768px) {
  :root {
    --text-xs: 12px;
    --text-sm: 14px;
    --text-base: 16px;   /* ⭐ 标准 */
    --text-lg: 18px;
    --text-xl: 20px;
    --text-2xl: 24px;
    --text-3xl: 30px;
    --text-4xl: 36px;
    --text-5xl: 48px;
  }
}
```

### Claude Code 决策

```javascript
function selectFontSize(breakpoint, element) {
  const mobileFontSize = {
    'body': '14px',
    'h1': '32px',
    'h2': '26px',
    'h3': '20px',
    'button': '14px'
  };

  const desktopFontSize = {
    'body': '16px',
    'h1': '36px',
    'h2': '30px',
    'h3': '24px',
    'button': '16px'
  };

  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return mobileFontSize[element];
  } else {
    return desktopFontSize[element];
  }
}
```

---

## 📏 5. 响应式间距系统

### 间距缩放策略

```
策略：移动端间距缩小 25%（×0.75）

原因：
1. 移动屏幕小，需要节省空间
2. 触摸目标已经 48px，间距可以更紧凑
```

### 间距变量（移动端）

```css
:root {
  /* xs/sm: 紧凑间距（×0.75）*/
  --space-xs: 3px;    /* 缩小自 4px */
  --space-sm: 6px;    /* 缩小自 8px */
  --space-md: 12px;   /* 缩小自 16px */
  --space-lg: 18px;   /* 缩小自 24px */
  --space-xl: 24px;   /* 缩小自 32px */
  --space-2xl: 36px;  /* 缩小自 48px */
  --space-3xl: 48px;  /* 缩小自 64px */
}

/* md 及以上：标准间距（×1.0）*/
@media (min-width: 768px) {
  :root {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
  }
}
```

### Claude Code 决策

```javascript
function selectSpacing(breakpoint, spacingSize) {
  const baseSpacing = {
    'xs': 4,
    'sm': 8,
    'md': 16,
    'lg': 24,
    'xl': 32,
    '2xl': 48,
    '3xl': 64
  };

  const scale = (breakpoint === 'xs' || breakpoint === 'sm') ? 0.75 : 1.0;

  return baseSpacing[spacingSize] * scale + 'px';
}
```

---

## 🖼️ 6. 响应式图片

### 图片适配策略

```html
<!-- 方案 1: srcset（推荐）-->
<img
  src="image-800w.webp"
  srcset="
    image-400w.webp 400w,
    image-800w.webp 800w,
    image-1200w.webp 1200w,
    image-1600w.webp 1600w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="响应式图片"
>

<!-- 方案 2: picture 元素（艺术方向）-->
<picture>
  <!-- 移动端：竖版裁剪 -->
  <source
    media="(max-width: 640px)"
    srcset="image-mobile-portrait.webp"
  >
  <!-- 桌面端：横版裁剪 -->
  <source
    media="(min-width: 641px)"
    srcset="image-desktop-landscape.webp"
  >
  <img src="image-desktop-landscape.webp" alt="图片">
</picture>
```

---

## 📱 7. 响应式布局模式

### 7.1 单列 → 多列（Column Drop）

```css
/* 移动端：单列堆叠 */
.layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 桌面端：并排显示 */
@media (min-width: 1024px) {
  .layout {
    flex-direction: row;
    gap: 32px;
  }

  .sidebar {
    flex: 0 0 300px;
  }

  .main {
    flex: 1;
  }
}
```

### 7.2 全宽 → 居中（Mostly Fluid）

```css
.article {
  width: 100%; /* 移动端全宽 */
  padding: 16px;
}

@media (min-width: 768px) {
  .article {
    max-width: 640px; /* 桌面端居中，限制宽度 */
    margin: 0 auto;
    padding: 48px 24px;
  }
}
```

### 7.3 隐藏 → 显示（Off Canvas）

```css
/* 移动端：侧边栏默认隐藏（抽屉）*/
.sidebar {
  position: fixed;
  left: -300px;
  width: 300px;
  height: 100%;
  transition: left 300ms;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

/* 桌面端：侧边栏始终显示 */
@media (min-width: 1024px) {
  .sidebar {
    position: static;
    left: auto;
  }
}
```

---

## 🤖 Claude Code 完整决策流程

### 输入：用户需求

```javascript
用户："创建一个博客文章页面"
```

### 决策步骤

```javascript
// Step 1: 确定布局模式
function analyzeLayout(request) {
  if (hasSidebar(request)) {
    return 'sidebar-layout'; // 侧边栏布局
  }
  if (isCentered(request)) {
    return 'centered-layout'; // 居中布局（文章、表单）
  }
  return 'fluid-layout'; // 流式布局（仪表板）
}

// Step 2: 应用响应式规则
function applyResponsiveRules(layout) {
  return `
    /* Mobile First（xs: 0-639px）*/
    .container {
      width: 100%;
      padding: ${selectSpacing('xs', 'md')}; /* 12px */
      font-size: ${selectFontSize('xs', 'body')}; /* 14px */
    }

    .article {
      font-size: ${selectFontSize('xs', 'body')}; /* 14px */
    }

    /* Tablet（md: 768px+）*/
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
        margin: 0 auto;
        padding: ${selectSpacing('md', 'lg')}; /* 24px */
        font-size: ${selectFontSize('md', 'body')}; /* 16px */
      }

      .article {
        max-width: 640px;
        font-size: ${selectFontSize('md', 'body')}; /* 16px */
      }
    }

    /* Desktop（lg: 1024px+）*/
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
        padding: ${selectSpacing('lg', 'xl')}; /* 32px */
      }

      ${layout === 'sidebar-layout' ? `
        .layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
        }
      ` : ''}
    }
  `;
}

// Step 3: 生成完整 HTML + CSS
function generatePage(layout) {
  const html = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>响应式页面</title>
      <style>
        ${applyResponsiveRules(layout)}
      </style>
    </head>
    <body>
      <div class="container">
        <!-- 内容 -->
      </div>
    </body>
    </html>
  `;

  return html;
}
```

---

## 📊 响应式测试检查清单

```markdown
生成响应式页面时，Claude Code 必须验证：

断点覆盖：
- [ ] 测试 xs（375px，iPhone）
- [ ] 测试 sm（640px，大手机）
- [ ] 测试 md（768px，iPad）
- [ ] 测试 lg（1024px，iPad 横屏）
- [ ] 测试 xl（1280px，MacBook）

布局适配：
- [ ] 移动端：单列堆叠
- [ ] 平板端：2-3 列网格
- [ ] 桌面端：完整多列布局

字号适配：
- [ ] 移动端基础字号 14px
- [ ] 桌面端基础字号 16px
- [ ] 标题字号等比缩放

间距适配：
- [ ] 移动端间距 ×0.75
- [ ] 桌面端间距 ×1.0

触摸目标：
- [ ] 移动端按钮 ≥ 48px
- [ ] 桌面端可以更小（鼠标精确）

导航适配：
- [ ] 移动端：汉堡菜单/底部导航
- [ ] 桌面端：顶部导航栏

图片适配：
- [ ] 使用 srcset 或 picture
- [ ] WebP 格式优先
- [ ] 懒加载启用
```

---

## 🛠️ 响应式工具类（可选）

### Tailwind 风格工具类

```css
/* 显示/隐藏工具类 */
.hidden-xs { display: none; }
@media (min-width: 640px) { .hidden-xs { display: block; } }

.hidden-lg { display: block; }
@media (min-width: 1024px) { .hidden-lg { display: none; } }

/* 响应式 Flexbox */
.flex-col-xs { flex-direction: column; }
@media (min-width: 768px) { .flex-row-md { flex-direction: row; } }

/* 响应式文本对齐 */
.text-center-xs { text-align: center; }
@media (min-width: 768px) { .text-left-md { text-align: left; } }
```

---

## 📚 参考资源

- **响应式设计模式**: https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns
- **Chrome DevTools 设备模拟**: 测试不同设备尺寸
- **Responsive Breakpoints**: https://www.responsivebreakpoints.com/

---

**版本**: 1.0.0
**最后更新**: 2025-01-28
**适用范围**: Web / H5 / Hybrid App

---

**© 2025 ZeroAI-UI Design System · Mobile-First · Progressive Enhancement**
