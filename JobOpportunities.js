
import React, { useState } from 'react';
import './JobOpportunities.css';
import Navbar from './Navbar';
import Footer from './Footer';

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    description: "Seeking a passionate software engineer with experience in React and Node.js.",
    alumni: "John Doe",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Microsoft",
    location: "Redmond, WA",
    description: "Looking for a product manager with strong organizational skills and a strategic mindset.",
    alumni: "Jane Smith",
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Amazon",
    location: "Seattle, WA",
    description: "Join our team to help us make data-driven decisions and insights.",
    alumni: "Emily Davis",
    postedDate: "3 days ago",
  },
];

const JobOpportunities = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <Navbar/>
    <div className="job-opportunities-container">
      <div className="search-section">
        <h2>Job Opportunities</h2>
        <input
          type="text"
          placeholder="Search by job title or company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="company-name">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <div className="job-meta">
                <span>Posted by {job.alumni}</span>
                <span>{job.postedDate}</span>
              </div>
              <button className="view-details-button">View Details</button>
            </div>
          ))
        ) : (
          <p className="no-jobs">No job opportunities found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default JobOpportunities;

