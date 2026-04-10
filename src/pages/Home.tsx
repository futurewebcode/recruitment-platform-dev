/**
 * 首页组件
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { mockJobs } from '../data/mockData';
import { Job } from '../types';

/**
 * 首页组件 - 展示平台简介和热门职位
 * @returns {React.JSX.Element} 首页组件
 */
const Home: React.FC = () => {
  // 热门职位（前 5 个）
  const hotJobs: Job[] = mockJobs.slice(0, 5);

  return (
    <div className="home-page">
      {/* 顶部导航 */}
      <nav className="navbar">
        <div className="nav-brand">招聘系统</div>
        <div className="nav-links">
          <Link to="/" className="nav-link active">首页</Link>
          <Link to="/jobs" className="nav-link">职位列表</Link>
          <Link to="/profile" className="nav-link">个人中心</Link>
        </div>
      </nav>

      {/* 平台简介 */}
      <section className="hero">
        <h1>欢迎使用招聘系统</h1>
        <p>连接人才与机会，找到理想工作</p>
        <Link to="/jobs" className="btn-primary">浏览职位</Link>
      </section>

      {/* 热门职位 */}
      <section className="hot-jobs">
        <h2>热门职位</h2>
        <div className="job-grid">
          {hotJobs.map(job => (
            <Link to={`/job/${job.id}`} key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <div className="job-info">
                <span className="salary">{job.salary}</span>
                <span className="location">{job.location}</span>
              </div>
              <p className="company">{job.company}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 底部版权 */}
      <footer className="footer">
        <p>&copy; 2026 招聘系统。All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
