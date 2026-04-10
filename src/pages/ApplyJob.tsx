/**
 * 简历投递页组件
 */
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { mockJobs } from '../data/mockData';
import { saveApplication, getUserProfile, saveUserProfile } from '../utils/storage';
import { Job, Application } from '../types';

/**
 * 简历投递页组件 - 填写简历并提交投递
 * @returns {React.JSX.Element} 简历投递页组件
 */
const ApplyJob: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job: Job | undefined = mockJobs.find(j => j.id === Number(id));
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 从 localStorage 加载已保存的个人信息
  const savedProfile = getUserProfile();

  const [formData, setFormData] = useState({
    name: savedProfile?.name || '',
    contact: savedProfile?.contact || '',
    education: savedProfile?.education || '',
    experience: savedProfile?.experience || '',
    introduction: savedProfile?.introduction || ''
  });

  if (!job) {
    return (
      <div className="apply-page">
        <nav className="navbar">
          <div className="nav-brand">招聘系统</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/jobs" className="nav-link">职位列表</Link>
            <Link to="/profile" className="nav-link">个人中心</Link>
          </div>
        </nav>
        <div className="not-found">
          <h2>职位不存在</h2>
          <button onClick={() => navigate('/jobs')}>返回列表</button>
        </div>
      </div>
    );
  }

  // 表单校验
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = '姓名不能为空';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = '联系方式不能为空';
    } else if (!/^1[3-9]\d{9}$/.test(formData.contact)) {
      newErrors.contact = '请输入有效的手机号';
    }

    if (!formData.education.trim()) {
      newErrors.education = '学历不能为空';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 清除错误
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 模拟文件上传
  const handleFileUpload = () => {
    alert('简历上传成功');
  };

  // 提交投递
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // 保存个人信息到 localStorage
    saveUserProfile({
      name: formData.name,
      contact: formData.contact,
      education: formData.education,
      experience: formData.experience,
      introduction: formData.introduction
    });

    // 保存投递记录
    const application: Application = {
      id: Date.now().toString(),
      jobId: job.id,
      jobTitle: job.title,
      submitTime: new Date().toLocaleString('zh-CN'),
      status: '待审核',
      resume: { ...formData }
    };

    saveApplication(application);

    // 显示成功提示
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/profile');
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="apply-page">
        <div className="success-modal">
          <h2>✓ 投递成功</h2>
          <p>正在跳转到个人中心...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-brand">招聘系统</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/jobs" className="nav-link">职位列表</Link>
          <Link to="/profile" className="nav-link">个人中心</Link>
        </div>
      </nav>

      {/* 申请表单 */}
      <section className="apply-section">
        <h2>投递简历</h2>
        <p className="job-title">申请职位：{job.title}</p>

        <form onSubmit={handleSubmit} className="apply-form">
          {/* 个人信息 */}
          <div className="form-section">
            <h3>个人信息</h3>
            
            <div className="form-group">
              <label>姓名 *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>联系方式（手机号）*</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="请输入 11 位手机号"
                className={errors.contact ? 'error' : ''}
              />
              {errors.contact && <span className="error-text">{errors.contact}</span>}
            </div>
          </div>

          {/* 学历经验 */}
          <div className="form-section">
            <h3>学历经验</h3>
            
            <div className="form-group">
              <label>学历 *</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={errors.education ? 'error' : ''}
              >
                <option value="">请选择学历</option>
                <option value="高中">高中</option>
                <option value="大专">大专</option>
                <option value="本科">本科</option>
                <option value="硕士">硕士</option>
                <option value="博士">博士</option>
              </select>
              {errors.education && <span className="error-text">{errors.education}</span>}
            </div>

            <div className="form-group">
              <label>工作经验</label>
              <select name="experience" value={formData.experience} onChange={handleChange}>
                <option value="">请选择工作经验</option>
                <option value="应届生">应届生</option>
                <option value="1-3 年">1-3 年</option>
                <option value="3-5 年">3-5 年</option>
                <option value="5-10 年">5-10 年</option>
                <option value="10 年以上">10 年以上</option>
              </select>
            </div>
          </div>

          {/* 个人简介 */}
          <div className="form-section">
            <h3>个人简介</h3>
            <div className="form-group">
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                placeholder="请简要介绍自己（可选）"
                rows={5}
              />
            </div>
          </div>

          {/* 简历上传 */}
          <div className="form-section">
            <h3>简历附件</h3>
            <div className="form-group">
              <button type="button" onClick={handleFileUpload} className="btn-upload">
                上传简历文件
              </button>
              <span className="upload-hint">支持 PDF、Word 格式（模拟上传）</span>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="form-actions">
            <button type="submit" className="btn-primary">提交投递</button>
            <button type="button" onClick={() => navigate(-1)} className="btn-secondary">取消</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2026 招聘系统。All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ApplyJob;
