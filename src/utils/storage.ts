/**
 * localStorage 工具函数
 */
import { Application, UserProfile } from '../types';

const STORAGE_KEYS = {
  APPLICATIONS: 'recruitment_applications',
  USER_PROFILE: 'recruitment_user_profile'
};

/**
 * 获取所有投递记录
 */
export const getApplications = (): Application[] => {
  const data = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
  return data ? JSON.parse(data) : [];
};

/**
 * 保存投递记录
 */
export const saveApplication = (application: Application): void => {
  const applications = getApplications();
  applications.push(application);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
};

/**
 * 删除投递记录
 */
export const deleteApplication = (id: string): void => {
  const applications = getApplications();
  const filtered = applications.filter(app => app.id !== id);
  localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(filtered));
};

/**
 * 获取个人信息
 */
export const getUserProfile = (): UserProfile | null => {
  const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return data ? JSON.parse(data) : null;
};

/**
 * 保存个人信息
 */
export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};
