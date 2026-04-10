/**
 * 招聘系统类型定义
 */

/** 职位信息 */
export interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  company: string;
}

/** 简历信息 */
export interface Resume {
  name: string;
  contact: string;
  education: string;
  experience: string;
  introduction: string;
}

/** 投递记录 */
export interface Application {
  id: string;
  jobId: number;
  jobTitle: string;
  submitTime: string;
  status: string;
  resume: Resume;
}

/** 个人信息 */
export interface UserProfile {
  name: string;
  contact: string;
  education: string;
  experience: string;
  introduction: string;
}
