# 招聘系统（纯前端简单版）

基于 React + TypeScript + Vite 的纯前端招聘系统，无需后端，使用 localStorage 实现数据持久化。

## 技术栈

- **React 18** - 渐进式 UI 库
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **React Router** - 前端路由
- **Vitest** - 单元测试框架
- **ESLint** - 代码质量检查

## 功能特性

### 5 个核心页面

1. **首页** - 平台简介、热门职位展示
2. **职位列表页** - 职位筛选、搜索、分页
3. **职位详情页** - 职位详细信息、投递简历入口
4. **简历投递页** - 表单填写、校验、模拟上传
5. **个人中心** - 个人信息管理、投递记录查看

### 核心功能

- ✅ 职位筛选（类别、地点、薪资）
- ✅ 关键词搜索
- ✅ 简历投递（表单校验）
- ✅ 个人信息管理（localStorage 持久化）
- ✅ 投递记录管理（查看、取消）
- ✅ 响应式设计（适配 PC 端）

### 预设数据

- 15 条职位数据
- 10 个职位类别
- 7 个工作地点
- 5 个薪资范围

## 快速开始

### 环境要求

- Node.js >= 20.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

输出目录：`dist/`

### 预览生产构建

```bash
npm run preview
```

## 可用命令

| 命令 | 描述 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | ESLint 代码规范检查 |
| `npm run test` | 运行单元测试 |

## 项目结构

```
recruitment-platform-dev/
├── src/
│   ├── pages/           # 页面组件
│   │   ├── Home.tsx     # 首页
│   │   ├── JobList.tsx  # 职位列表
│   │   ├── JobDetail.tsx # 职位详情
│   │   ├── ApplyJob.tsx # 简历投递
│   │   └── Profile.tsx  # 个人中心
│   ├── data/
│   │   └── mockData.ts  # 预设数据
│   ├── utils/
│   │   └── storage.ts   # localStorage 工具
│   ├── types.ts         # 类型定义
│   ├── App.tsx          # 主应用（路由）
│   ├── main.tsx         # 入口文件
│   └── index.css        # 全局样式
├── __tests__/           # 测试文件
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 数据存储

使用 `localStorage` 保存：

- `recruitment_applications` - 投递记录
- `recruitment_user_profile` - 用户个人信息

清除浏览器缓存后数据会重置。

## 验收标准

- ✅ 5 个核心页面齐全，跳转正常
- ✅ 筛选、搜索、投递功能正常
- ✅ localStorage 数据持久化正常
- ✅ 表单校验正常（必填项、手机号格式）
- ✅ 主流浏览器兼容（Chrome、Edge、Firefox）

## License

MIT
