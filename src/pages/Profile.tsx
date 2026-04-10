/**
 * 个人中心页组件
 */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getApplications, deleteApplication, getUserProfile, saveUserProfile } from '../utils/storage';
import { Application, UserProfile } from '../types';

/**
 * 个人中心页组件 - 展示个人信息和投递记录
 * @returns {React.JSX.Element} 个人中心页组件
 */
const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  
  const savedProfile = getUserProfile();
  const [profile, setProfile] = useState<UserProfile>({
    name: savedProfile?.name || '',
    contact: savedProfile?.contact || '',
    education: savedProfile?.education || '',
    experience: savedProfile?.experience || '',
    introduction: savedProfile?.introduction || ''
  });

  useEffect(() => {
    // 加载投递记录
    const apps = getApplications();
    setApplications(apps);
  }, []);

  // 处理个人信息编辑
  const handleSaveProfile = () => {
    saveUserProfile(profile);
    setIsEditing(false);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // 取消投递
  const handleCancelApplication = (id: string) => {
    if (window.confirm('确定要取消这个投递吗？')) {
      deleteApplication(id);
      setApplications(prev => prev.filter(app => app.id !== id));
    }
  };

  return (
    <div className="profile-page">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-brand">招聘系统</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/jobs" className="nav-link">职位列表</Link>
          <Link to="/profile" className="nav-link active">个人中心</Link>
        </div>
      </nav>

      <div className="profile-content">
        {/* 左侧：个人信息 */}
        <section className="profile-section">
          <div className="section-header">
            <h2>个人信息</h2>
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="btn-edit">编辑</button>
            )}
          </div>

          {isEditing ? (
            <div className="edit-form">
              <div className="form-group">
                <label>姓名</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label>联系方式</label>
                <input
                  type="text"
                  name="contact"
                  value={profile.contact}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label>学历</label>
                <select name="education" value={profile.education} onChange={handleProfileChange}>
                  <option value="">请选择</option>
                  <option value="高中">高中</option>
                  <option value="大专">大专</option>
                  <option value="本科">本科</option>
                  <option value="硕士">硕士</option>
                  <option value="博士">博士</option>
                </select>
              </div>
              <div className="form-group">
                <label>工作经验</label>
                <select name="experience" value={profile.experience} onChange={handleProfileChange}>
                  <option value="">请选择</option>
                  <option value="应届生">应届生</option>
                  <option value="1-3 年">1-3 年</option>
                  <option value="3-5 年">3-5 年</option>
                  <option value="5-10 年">5-10 年</option>
                  <option value="10 年以上">10 年以上</option>
                </select>
              </div>
              <div className="form-group">
                <label>个人简介</label>
                <textarea
                  name="introduction"
                  value={profile.introduction}
                  onChange={handleProfileChange}
                  rows={4}
                />
              </div>
              <div className="form-actions">
                <button onClick={handleSaveProfile} className="btn-primary">保存</button>
                <button onClick={() => setIsEditing(false)} className="btn-secondary">取消</button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-row">
                <span className="label">姓名：</span>
                <span className="value">{profile.name || '未填写'}</span>
              </div>
              <div className="info-row">
                <span className="label">联系方式：</span>
                <span className="value">{profile.contact || '未填写'}</span>
              </div>
              <div className="info-row">
                <span className="label">学历：</span>
                <span className="value">{profile.education || '未填写'}</span>
              </div>
              <div className="info-row">
                <span className="label">工作经验：</span>
                <span className="value">{profile.experience || '未填写'}</span>
              </div>
              {profile.introduction && (
                <div className="info-row">
                  <span className="label">个人简介：</span>
                  <span className="value">{profile.introduction}</span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 右侧：投递记录 */}
        <section className="applications-section">
          <h2>已投递职位</h2>
          
          {applications.length === 0 ? (
            <div className="no-applications">
              <p>暂无投递记录</p>
              <Link to="/jobs" className="btn-primary">去浏览职位</Link>
            </div>
          ) : (
            <div className="applications-list">
              {applications.map(app => (
                <div key={app.id} className="application-item">
                  <div className="app-info">
                    <h3>{app.jobTitle}</h3>
                    <div className="app-meta">
                      <span>投递时间：{app.submitTime}</span>
                      <span className={`status status-${app.status}`}>{app.status}</span>
                    </div>
                  </div>
                  <div className="app-actions">
                    <button
                      onClick={() => navigate(`/job/${app.jobId}`)}
                      className="btn-small"
                    >
                      查看职位
                    </button>
                    <button
                      onClick={() => handleCancelApplication(app.id)}
                      className="btn-small btn-danger"
                    >
                      取消投递
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2026 招聘系统。All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
