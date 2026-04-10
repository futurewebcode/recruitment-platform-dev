/**
 * 预设职位数据（15 条）
 */
import { Job } from '../types';

export const mockJobs: Job[] = [
  {
    id: 1,
    title: '前端开发工程师',
    category: '技术',
    location: '北京',
    salary: '15-25K',
    company: '科技创新公司',
    description: '负责公司 Web 应用的前端开发，参与产品需求分析和技术方案设计。',
    requirements: ['3 年以上前端开发经验', '精通 React/Vue', '熟悉 TypeScript', '良好的沟通能力']
  },
  {
    id: 2,
    title: '后端开发工程师',
    category: '技术',
    location: '上海',
    salary: '18-30K',
    company: '互联网大厂',
    description: '负责后端服务开发，数据库设计和性能优化。',
    requirements: ['5 年以上后端开发经验', '精通 Java/Go', '熟悉 MySQL/Redis', '有高并发经验']
  },
  {
    id: 3,
    title: '产品经理',
    category: '产品',
    location: '深圳',
    salary: '20-35K',
    company: '创业公司',
    description: '负责产品规划、需求分析和项目管理。',
    requirements: ['3 年以上产品经验', '优秀的逻辑思维', '良好的沟通能力', '有 B 端产品经验']
  },
  {
    id: 4,
    title: 'UI 设计师',
    category: '设计',
    location: '杭州',
    salary: '12-20K',
    company: '设计公司',
    description: '负责产品界面设计和用户体验优化。',
    requirements: ['2 年以上 UI 设计经验', '精通 Figma/Sketch', '有作品集', '关注设计趋势']
  },
  {
    id: 5,
    title: '数据分析师',
    category: '数据',
    location: '北京',
    salary: '15-25K',
    company: '数据科技公司',
    description: '负责数据分析、报表制作和业务洞察。',
    requirements: ['统计学相关专业', '精通 SQL/Python', '熟悉数据可视化工具', '有业务分析经验']
  },
  {
    id: 6,
    title: '运维工程师',
    category: '技术',
    location: '广州',
    salary: '14-22K',
    company: '云计算公司',
    description: '负责服务器运维、监控和自动化部署。',
    requirements: ['3 年以上运维经验', '熟悉 Linux', '有 K8s 经验', '熟悉 CI/CD']
  },
  {
    id: 7,
    title: '测试工程师',
    category: '技术',
    location: '成都',
    salary: '10-18K',
    company: '软件公司',
    description: '负责软件测试、用例编写和质量保证。',
    requirements: ['2 年以上测试经验', '熟悉自动化测试', '了解持续集成', '细心负责']
  },
  {
    id: 8,
    title: '人力资源专员',
    category: '人力',
    location: '上海',
    salary: '8-15K',
    company: '集团公司',
    description: '负责招聘、员工关系和培训工作。',
    requirements: ['人力资源相关专业', '1 年以上 HR 经验', '良好的沟通能力', '熟悉劳动法规']
  },
  {
    id: 9,
    title: '市场营销经理',
    category: '市场',
    location: '深圳',
    salary: '18-30K',
    company: '品牌公司',
    description: '负责市场推广、品牌建设和活动策划。',
    requirements: ['5 年以上市场经验', '有成功案例', '优秀的策划能力', '熟悉数字营销']
  },
  {
    id: 10,
    title: '全栈开发工程师',
    category: '技术',
    location: '杭州',
    salary: '20-35K',
    company: '初创公司',
    description: '负责前后端全栈开发，参与技术架构设计。',
    requirements: ['4 年以上全栈经验', '精通 React+Node.js', '有架构设计经验', '学习能力强']
  },
  {
    id: 11,
    title: '移动端开发工程师',
    category: '技术',
    location: '北京',
    salary: '16-28K',
    company: '移动互联网公司',
    description: '负责 iOS/Android 应用开发。',
    requirements: ['3 年以上移动端经验', '精通 Swift/Kotlin', '有上线作品', '熟悉跨平台开发']
  },
  {
    id: 12,
    title: '算法工程师',
    category: '技术',
    location: '上海',
    salary: '25-45K',
    company: 'AI 公司',
    description: '负责机器学习算法研发和优化。',
    requirements: ['硕士以上学历', '精通 Python', '熟悉 TensorFlow/PyTorch', '有论文发表']
  },
  {
    id: 13,
    title: '客服专员',
    category: '客服',
    location: '成都',
    salary: '5-8K',
    company: '电商公司',
    description: '负责客户咨询和问题处理。',
    requirements: ['高中以上学历', '良好的沟通能力', '耐心细致', '有客服经验优先']
  },
  {
    id: 14,
    title: '财务专员',
    category: '财务',
    location: '广州',
    salary: '8-12K',
    company: '贸易公司',
    description: '负责日常财务核算和报表制作。',
    requirements: ['财务相关专业', '有会计证', '熟悉财务软件', '1 年以上经验']
  },
  {
    id: 15,
    title: '运营专员',
    category: '运营',
    location: '深圳',
    salary: '10-18K',
    company: '新媒体公司',
    description: '负责内容运营和用户增长。',
    requirements: ['2 年以上运营经验', '熟悉社交媒体', '有数据分析能力', '创意思维']
  }
];

/** 职位类别选项 */
export const jobCategories = ['全部', '技术', '产品', '设计', '数据', '人力', '市场', '客服', '财务', '运营'];

/** 工作地点选项 */
export const jobLocations = ['全部', '北京', '上海', '深圳', '杭州', '广州', '成都'];

/** 薪资范围选项 */
export const salaryRanges = ['全部', '5-10K', '10-15K', '15-20K', '20-30K', '30K+'];
