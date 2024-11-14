import React, { useState } from 'react';
import './Alumnijob.css';
import Navbar from './AlumniNavbar';
import Footer from './Footer';

const Alumnijobs = ({ role = "Alumni" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState([
    // Initial job listings
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      description: "Seeking a passionate software engineer with experience in React and Node.js.",
      alumni: "John Doe",
      postedDate: "2 days ago",
    },  {
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
    // More jobs...
  ]);
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    alumni: '',
    postedDate: 'Just now',
  });

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle the form visibility
  const handleAddJobClick = () => {
    setShowAddJobForm(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  // Submit the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJobs([newJob, ...jobs]); // Add the new job to the job listings
    setNewJob({ title: '', company: '', location: '', description: '', alumni: '', postedDate: 'Just now' });
    setShowAddJobForm(false);
  };

  // Debugging: Log the role prop
  console.log("Role:", role);

  return (
    <div>
      <Navbar />
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
          
          {/* Show Add Job button only for Alumni */}
          {role === "Alumni" && (
            <button className="add-job-button" onClick={handleAddJobClick}>
              Add Job Opportunity
            </button>
          )}
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="job-card">
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

        {/* Add Job Form Modal */}
        {showAddJobForm && (
          <div className="modal-overlay">
            <div className="add-job-form">
              <h2>Add Job Opportunity</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={newJob.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={newJob.company}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={newJob.location}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Job Description"
                  value={newJob.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <input
                  type="text"
                  name="alumni"
                  placeholder="Your Name"
                  value={newJob.alumni}
                  onChange={handleChange}
                  required
                />
                <div className="form-buttons">
                  <button type="submit" className="submit-button">Post Job</button>
                  <button type="button" onClick={() => setShowAddJobForm(false)} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Alumnijobs;