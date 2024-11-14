import React, { useState } from 'react';
import './AlumniSearch.css';
import Navbar from './Navbar';
import Footer from './Footer';

const alumniData = [
  { id: 1, name: 'John Doe', graduationYear: 2015, major: 'Computer Science', company: 'Google' },
  { id: 2, name: 'Jane Smith', graduationYear: 2018, major: 'Mechanical Engineering', company: 'Tesla' },
  { id: 3, name: 'Alex Johnson', graduationYear: 2016, major: 'Electrical Engineering', company: 'Intel' },
  { id: 4, name: 'Emily Davis', graduationYear: 2017, major: 'Business', company: 'Amazon' },
  { id: 5, name: 'Michael Brown', graduationYear: 2019, major: 'Physics', company: 'SpaceX' },
];

const AlumniSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <Navbar/>
    <div className="alumni-search-container">
      <div className="search-card">
        <h2>Search Alumni</h2>
        <input
          type="text"
          placeholder="Search alumni by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="table-container">
        <table className="alumni-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Graduation Year</th>
              <th>Major</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map((alumni) => (
                <tr key={alumni.id}>
                  <td>{alumni.name}</td>
                  <td>{alumni.graduationYear}</td>
                  <td>{alumni.major}</td>
                  <td>{alumni.company}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No alumni found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AlumniSearch;
