/**
 * 职位列表页组件
 */
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockJobs, jobCategories, jobLocations, salaryRanges } from '../data/mockData';

/**
 * 职位列表页组件 - 展示所有职位，支持筛选和搜索
 * @returns {React.JSX.Element} 职位列表页组件
 */
const JobList: React.FC = () => {
  const [category, setCategory] = useState<string>('全部');
  const [location, setLocation] = useState<string>('全部');
  const [salary, setSalary] = useState<string>('全部');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;

  // 筛选和搜索
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchCategory = category === '全部' || job.category === category;
      const matchLocation = location === '全部' || job.location === location;
      const matchSalary = salary === '全部' || matchSalaryRange(job.salary, salary);
      const matchSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchLocation && matchSalary && matchSearch;
    });
  }, [category, location, salary, searchTerm]);

  // 分页
  const totalPages = Math.ceil(filteredJobs.length / pageSize);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // 重置分页
  const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="job-list-page">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-brand">招聘系统</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/jobs" className="nav-link active">职位列表</Link>
          <Link to="/profile" className="nav-link">个人中心</Link>
        </div>
      </nav>

      {/* 筛选栏 */}
      <section className="filter-section">
        <div className="filter-group">
          <label>职位类别</label>
          <select value={category} onChange={(e) => handleFilterChange(setCategory, e.target.value)}>
            {jobCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>工作地点</label>
          <select value={location} onChange={(e) => handleFilterChange(setLocation, e.target.value)}>
            {jobLocations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>薪资范围</label>
          <select value={salary} onChange={(e) => handleFilterChange(setSalary, e.target.value)}>
            {salaryRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>搜索</label>
          <input
            type="text"
            placeholder="职位名称/关键词"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* 职位列表 */}
      <section className="jobs-section">
        {paginatedJobs.length === 0 ? (
          <div className="no-results">无相关职位</div>
        ) : (
          <>
            <div className="jobs-list">
              {paginatedJobs.map(job => (
                <Link to={`/job/${job.id}`} key={job.id} className="job-card-list">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="salary">{job.salary}</span>
                  </div>
                  <div className="job-meta">
                    <span>{job.category}</span>
                    <span>{job.location}</span>
                    <span>{job.company}</span>
                  </div>
                  <p className="job-desc">{job.description}</p>
                </Link>
              ))}
            </div>

            {/* 分页 */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                >
                  上一页
                </button>
                <span>第 {currentPage} / {totalPages} 页</span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                >
                  下一页
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2026 招聘系统。All rights reserved.</p>
      </footer>
    </div>
  );
};

/**
 * 匹配薪资范围
 */
function matchSalaryRange(jobSalary: string, filterSalary: string): boolean {
  if (filterSalary === '全部') return true;
  
  const ranges: { [key: string]: [number, number] } = {
    '5-10K': [5, 10],
    '10-15K': [10, 15],
    '15-20K': [15, 20],
    '20-30K': [20, 30],
    '30K+': [30, 999]
  };

  const [min, max] = ranges[filterSalary];
  const jobMin = parseInt(jobSalary.split('-')[0]) || 0;
  
  return jobMin >= min && jobMin <= max;
}

export default JobList;
