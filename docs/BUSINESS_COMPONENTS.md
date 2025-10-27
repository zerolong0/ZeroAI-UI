# ZeroAI-UI: 传统业务组件库

> **覆盖 70% 管理后台场景的核心组件**
>
> Version: 1.0.0
> Last Updated: 2025-01-28
> Stack: Vanilla JS + CSS（轻量级，无框架依赖）

---

## 🎯 核心理念

```
传统组件库（Ant Design, Element UI）：
→ 依赖 React/Vue 框架
→ 需要 npm 安装
→ 打包体积大

ZeroAI-UI 业务组件：
→ 纯 Vanilla JS（无框架依赖）
→ 复制即用（适合本地开发）
→ 轻量级（单文件 < 10KB）
→ Claude Code 100% 可理解并生成
```

---

## 📊 1. 数据表格（Table）

### 1.1 功能清单

```
核心功能（必备）：
✅ 基础表格（斑马纹、悬停高亮）
✅ 可排序表头（升序/降序）
✅ 分页器（每页条数、跳转）

进阶功能（按需）：
⏳ 筛选器（单列筛选、多列筛选）
⏳ 行内编辑（双击编辑、回车保存）
⏳ 固定列（左侧固定、右侧固定）
⏳ 虚拟滚动（10000+ 条数据）
```

### 1.2 Claude Code 决策树

```javascript
function selectTableFeatures(dataSize, editable, filters) {
  const features = ['basic']; // 基础表格（必需）

  // 决策 1: 数据量
  if (dataSize > 100) {
    features.push('pagination'); // 添加分页
  }
  if (dataSize > 1000) {
    features.push('virtual-scroll'); // 添加虚拟滚动
  }

  // 决策 2: 可编辑
  if (editable) {
    features.push('inline-edit'); // 行内编辑
  }

  // 决策 3: 筛选
  if (filters) {
    features.push('filters'); // 列筛选
  }

  // 决策 4: 排序（默认启用）
  features.push('sortable');

  return features;
}
```

### 1.3 基础表格示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>ZeroAI-UI 数据表格</title>
  <style>
    /* 表格容器 */
    .table-container {
      overflow-x: auto;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
    }

    /* 表格基础样式 */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }

    /* 表头 */
    .data-table thead {
      background: #F9FAFB;
      border-bottom: 2px solid #E5E7EB;
    }

    .data-table th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      color: #111827;
      white-space: nowrap;
    }

    /* 可排序表头 */
    .data-table th.sortable {
      cursor: pointer;
      user-select: none;
      position: relative;
      padding-right: 32px;
    }

    .data-table th.sortable:hover {
      background: #F3F4F6;
    }

    .data-table th.sortable::after {
      content: '⇅';
      position: absolute;
      right: 12px;
      color: #9CA3AF;
      font-size: 12px;
    }

    .data-table th.sortable.asc::after {
      content: '↑';
      color: #2563EB;
    }

    .data-table th.sortable.desc::after {
      content: '↓';
      color: #2563EB;
    }

    /* 表格行 */
    .data-table tbody tr {
      border-bottom: 1px solid #E5E7EB;
      transition: background 150ms;
    }

    /* 斑马纹 */
    .data-table tbody tr:nth-child(even) {
      background: #F9FAFB;
    }

    /* 悬停高亮 */
    .data-table tbody tr:hover {
      background: #EFF6FF;
    }

    .data-table td {
      padding: 12px 16px;
      color: #374151;
    }

    /* 操作列 */
    .actions {
      display: flex;
      gap: 8px;
    }

    .action-btn {
      padding: 4px 12px;
      border: 1px solid #D1D5DB;
      border-radius: 4px;
      background: white;
      font-size: 13px;
      cursor: pointer;
      transition: all 150ms;
    }

    .action-btn:hover {
      background: #F3F4F6;
    }

    .action-btn.delete {
      color: #EF4444;
      border-color: #FECACA;
    }

    .action-btn.delete:hover {
      background: #FEF2F2;
    }

    /* 分页器 */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-top: 1px solid #E5E7EB;
    }

    .pagination-info {
      font-size: 14px;
      color: #6B7280;
    }

    .pagination-controls {
      display: flex;
      gap: 8px;
    }

    .page-btn {
      min-width: 32px;
      height: 32px;
      border: 1px solid #D1D5DB;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      transition: all 150ms;
    }

    .page-btn:hover:not(:disabled) {
      background: #F3F4F6;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-btn.active {
      background: #2563EB;
      color: white;
      border-color: #2563EB;
    }
  </style>
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto; padding: 32px;">
    <h1>数据表格示例</h1>

    <div class="table-container">
      <table class="data-table" id="dataTable">
        <thead>
          <tr>
            <th class="sortable" data-key="id">ID</th>
            <th class="sortable" data-key="name">姓名</th>
            <th class="sortable" data-key="email">邮箱</th>
            <th class="sortable" data-key="role">角色</th>
            <th class="sortable" data-key="status">状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          <!-- 动态填充 -->
        </tbody>
      </table>

      <div class="pagination">
        <div class="pagination-info" id="paginationInfo">
          显示 1-10 条，共 50 条
        </div>
        <div class="pagination-controls">
          <button class="page-btn" id="prevBtn">上一页</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">4</button>
          <button class="page-btn">5</button>
          <button class="page-btn" id="nextBtn">下一页</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // 模拟数据
    const mockData = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `用户 ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['管理员', '编辑者', '查看者'][Math.floor(Math.random() * 3)],
      status: ['活跃', '禁用'][Math.floor(Math.random() * 2)]
    }));

    // 表格状态
    let currentPage = 1;
    let pageSize = 10;
    let sortKey = null;
    let sortOrder = 'asc';
    let data = [...mockData];

    // 渲染表格
    function renderTable() {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const pageData = data.slice(start, end);

      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = pageData.map(row => `
        <tr>
          <td>${row.id}</td>
          <td>${row.name}</td>
          <td>${row.email}</td>
          <td>${row.role}</td>
          <td>${row.status}</td>
          <td>
            <div class="actions">
              <button class="action-btn" onclick="editRow(${row.id})">编辑</button>
              <button class="action-btn delete" onclick="deleteRow(${row.id})">删除</button>
            </div>
          </td>
        </tr>
      `).join('');

      // 更新分页信息
      document.getElementById('paginationInfo').textContent =
        `显示 ${start + 1}-${Math.min(end, data.length)} 条，共 ${data.length} 条`;
    }

    // 排序
    document.querySelectorAll('.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.dataset.key;

        // 更新排序方向
        if (sortKey === key) {
          sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          sortKey = key;
          sortOrder = 'asc';
        }

        // 移除所有排序标记
        document.querySelectorAll('.sortable').forEach(el => {
          el.classList.remove('asc', 'desc');
        });

        // 添加当前排序标记
        th.classList.add(sortOrder);

        // 执行排序
        data.sort((a, b) => {
          if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
          if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
          return 0;
        });

        renderTable();
      });
    });

    // 分页
    document.getElementById('prevBtn').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      if (currentPage < Math.ceil(data.length / pageSize)) {
        currentPage++;
        renderTable();
      }
    });

    // 操作
    function editRow(id) {
      alert(`编辑行 ${id}`);
    }

    function deleteRow(id) {
      if (confirm(`确定删除 ID ${id} 的数据吗？`)) {
        data = data.filter(row => row.id !== id);
        renderTable();
      }
    }

    // 初始化
    renderTable();
  </script>
</body>
</html>
```

---

## 📝 2. 复杂表单（Form）

### 2.1 功能清单

```
核心功能：
✅ 表单验证（必填、格式、自定义规则）
✅ 实时错误提示
✅ 字段联动（选择 A 时，显示 B）

进阶功能：
⏳ 多步骤表单（向导式，带进度条）
⏳ 动态表单（增删表单项）
⏳ 文件上传（拖拽、预览、进度条）
```

### 2.2 Claude Code 决策树

```javascript
function selectFormFeatures(hasValidation, hasDependencies, isMultiStep) {
  const features = ['basic']; // 基础表单

  if (hasValidation) {
    features.push('validation'); // 表单验证
    features.push('real-time-error'); // 实时错误
  }

  if (hasDependencies) {
    features.push('field-dependency'); // 字段联动
  }

  if (isMultiStep) {
    features.push('multi-step'); // 多步骤表单
    features.push('progress-indicator'); // 进度指示器
  }

  return features;
}
```

### 2.3 表单验证示例

```html
<style>
  .form-group {
    margin-bottom: 24px;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  .form-label.required::after {
    content: ' *';
    color: #EF4444;
  }

  .form-input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #D1D5DB;
    border-radius: 6px;
    font-size: 14px;
    transition: all 150ms;
  }

  .form-input:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .form-input.error {
    border-color: #EF4444;
  }

  .error-message {
    margin-top: 6px;
    font-size: 13px;
    color: #EF4444;
  }

  .submit-btn {
    width: 100%;
    height: 44px;
    background: #2563EB;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 150ms;
  }

  .submit-btn:hover {
    background: #1D4ED8;
  }

  .submit-btn:disabled {
    background: #9CA3AF;
    cursor: not-allowed;
  }
</style>

<form id="validatedForm">
  <div class="form-group">
    <label class="form-label required">用户名</label>
    <input
      type="text"
      class="form-input"
      name="username"
      data-validate="required|minLength:3|maxLength:20"
    >
    <div class="error-message"></div>
  </div>

  <div class="form-group">
    <label class="form-label required">邮箱</label>
    <input
      type="email"
      class="form-input"
      name="email"
      data-validate="required|email"
    >
    <div class="error-message"></div>
  </div>

  <div class="form-group">
    <label class="form-label required">密码</label>
    <input
      type="password"
      class="form-input"
      name="password"
      data-validate="required|minLength:8"
    >
    <div class="error-message"></div>
  </div>

  <button type="submit" class="submit-btn">提交</button>
</form>

<script>
  // 验证规则库
  const validators = {
    required: (value) => {
      return value.trim() !== '' || '此字段为必填项';
    },
    email: (value) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value) || '请输入有效的邮箱地址';
    },
    minLength: (value, length) => {
      return value.length >= length || `最少需要 ${length} 个字符`;
    },
    maxLength: (value, length) => {
      return value.length <= length || `最多允许 ${length} 个字符`;
    }
  };

  // 验证单个字段
  function validateField(input) {
    const rules = input.dataset.validate.split('|');
    const value = input.value;
    const errorEl = input.parentElement.querySelector('.error-message');

    for (const rule of rules) {
      const [name, param] = rule.split(':');
      const validator = validators[name];

      if (validator) {
        const result = validator(value, param);

        if (result !== true) {
          // 验证失败
          input.classList.add('error');
          errorEl.textContent = result;
          return false;
        }
      }
    }

    // 验证通过
    input.classList.remove('error');
    errorEl.textContent = '';
    return true;
  }

  // 表单提交
  const form = document.getElementById('validatedForm');
  const inputs = form.querySelectorAll('[data-validate]');

  // 实时验证
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input); // 有错误时实时验证
      }
    });
  });

  // 提交验证
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      alert('表单验证通过！');
      // 提交表单数据...
    }
  });
</script>
```

---

## 📈 3. 数据可视化（Charts）

### 3.1 功能清单

```
基础图表（纯 CSS 实现）：
✅ 进度条（Progress Bar）
✅ 进度环（Progress Ring）
✅ 迷你图表（Sparkline）

进阶图表（使用 Chart.js）：
⏳ 折线图（Line Chart）- 趋势分析
⏳ 柱状图（Bar Chart）- 对比分析
⏳ 饼图（Pie Chart）- 占比分析
```

### 3.2 Claude Code 决策树

```javascript
function selectChartType(dataType, analysisGoal) {
  // 决策 1: 数据类型
  if (dataType === 'time-series') {
    return 'line-chart'; // 时间序列 → 折线图
  }

  if (dataType === 'comparison') {
    return 'bar-chart'; // 对比数据 → 柱状图
  }

  if (dataType === 'percentage') {
    return 'pie-chart'; // 占比数据 → 饼图
  }

  if (dataType === 'progress') {
    return 'progress-bar'; // 进度数据 → 进度条
  }

  // 决策 2: 分析目标
  if (analysisGoal === 'trend') {
    return 'line-chart';
  }

  return 'bar-chart'; // 默认
}
```

### 3.3 进度环示例（纯 CSS）

```html
<style>
  .progress-ring-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .progress-ring {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(
      #2563EB 0% var(--progress),
      #E5E7EB var(--progress) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring::before {
    content: '';
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: white;
    position: absolute;
  }

  .progress-value {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    z-index: 1;
  }

  .progress-label {
    font-size: 14px;
    color: #6B7280;
  }
</style>

<div class="progress-ring-container">
  <div class="progress-ring" style="--progress: 75%;">
    <span class="progress-value">75%</span>
  </div>
  <span class="progress-label">任务完成度</span>
</div>
```

---

## 📃 4. 列表组件（List）

### 4.1 功能清单

```
基础列表：
✅ 无限滚动（Infinite Scroll）
✅ 下拉刷新（Pull to Refresh）
✅ 骨架屏（Skeleton）
✅ 空状态（Empty State）

进阶列表：
⏳ 虚拟滚动（10000+ 条数据）
```

### 4.2 骨架屏示例

```html
<style>
  .skeleton {
    background: linear-gradient(
      90deg,
      #F3F4F6 25%,
      #E5E7EB 50%,
      #F3F4F6 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .skeleton-card {
    padding: 16px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .skeleton-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 12px;
  }

  .skeleton-title {
    height: 20px;
    width: 60%;
    margin-bottom: 8px;
  }

  .skeleton-text {
    height: 14px;
    width: 100%;
    margin-bottom: 6px;
  }

  .skeleton-text.short {
    width: 80%;
  }
</style>

<div class="skeleton-card">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text short"></div>
</div>
```

---

## 🤖 Claude Code 生成流程示例

### 用户请求：

```
用户："创建一个用户管理页面，包含数据表格和搜索功能"
```

### Claude Code 决策：

```javascript
// Step 1: 识别需求
const requirements = {
  pageType: '管理页面',
  mainComponent: '数据表格',
  features: ['搜索', '分页', '排序', '操作按钮']
};

// Step 2: 选择组件
const components = [
  'data-table',          // 数据表格
  'search-input',        // 搜索框
  'pagination',          // 分页器
  'action-buttons'       // 操作按钮（编辑/删除）
];

// Step 3: 生成代码
generatePage({
  layout: 'dashboard-layout',
  components: components,
  dataSource: 'mockData',
  responsive: true
});
```

---

## 📚 组件使用检查清单

```markdown
生成业务组件时，Claude Code 必须验证：

数据表格：
- [ ] 数据量 > 100 时添加分页
- [ ] 表头默认可排序
- [ ] 操作列右对齐
- [ ] 斑马纹 + 悬停高亮

表单：
- [ ] 必填字段标记 *
- [ ] 实时验证（blur 触发）
- [ ] 错误信息清晰
- [ ] 提交前全表单验证

图表：
- [ ] 根据数据类型选择图表
- [ ] 颜色符合设计系统（Human/AI Layer）
- [ ] 响应式适配

列表：
- [ ] 加载中显示骨架屏
- [ ] 无数据显示空状态
- [ ] 移动端支持下拉刷新
```

---

**版本**: 1.0.0
**最后更新**: 2025-01-28
**技术栈**: Vanilla JS + CSS（轻量级）

---

**© 2025 ZeroAI-UI Design System · Business Components Library**
