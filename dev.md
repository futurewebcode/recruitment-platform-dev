# 开发文档

## 技术栈

- React 18 + TypeScript
- Vite 5
- React Router 6

## 页面路由

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | Home | 首页 |
| `/jobs` | JobList | 职位列表 |
| `/job/:id` | JobDetail | 职位详情 |
| `/apply/:id` | ApplyJob | 简历投递 |
| `/profile` | Profile | 个人中心 |

## 数据模型

### Job（职位）
```typescript
interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  company: string;
}
```

### Application（投递记录）
```typescript
interface Application {
  id: string;
  jobId: number;
  jobTitle: string;
  submitTime: string;
  status: string;
  resume: Resume;
}
```

## localStorage 键值

- `recruitment_applications` - 投递记录数组
- `recruitment_user_profile` - 用户个人信息

## 开发命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 测试
npm run test

# 代码检查
npm run lint
```
