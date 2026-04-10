/**
 * 职位详情页组件
 */
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { mockJobs } from '../data/mockData';
import { Job } from '../types';

/**
 * 职位详情页组件 - 展示单个职位详细信息
 * @returns {React.JSX.Element} 职位详情页组件
 */
const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job: Job | undefined = mockJobs.find(j => j.id === Number(id));

  if (!job) {
    return (
      <div className="job-detail-page">
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

  return (
    <div className="job-detail-page">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-brand">招聘系统</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/jobs" className="nav-link">职位列表</Link>
          <Link to="/profile" className="nav-link">个人中心</Link>
        </div>
      </nav>

      {/* 职位详情 */}
      <section className="detail-section">
        <div className="detail-header">
          <h1>{job.title}</h1>
          <div className="highlight-info">
            <span className="salary">{job.salary}</span>
            <span className="location">{job.location}</span>
            <span className="category">{job.category}</span>
          </div>
        </div>

        <div className="detail-body">
          <div className="info-block">
            <h3>公司信息</h3>
            <p>{job.company}</p>
          </div>

          <div className="info-block">
            <h3>职位描述</h3>
            <p>{job.description}</p>
          </div>

          <div className="info-block">
            <h3>任职要求</h3>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-actions">
          <Link to={`/apply/${job.id}`} className="btn-primary">投递简历</Link>
          <button onClick={() => navigate('/jobs')} className="btn-secondary">返回列表</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 招聘系统。All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JobDetail;
