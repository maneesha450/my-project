import React from 'react';
import './p.css';
import Footer from './Footer';
import Navbar from './Navbar';
const Studenthome = () => {
  return (
    <div>
      <Navbar/>
    <div style={styles.container}>
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to the NIT Calicut Alumni Portal</h1>
        <p style={styles.heroSubtitle}>
          Reconnect with friends, engage with events, and celebrate achievements of the NITC alumni community.
        </p>
        {/* <button style={styles.heroButton}>Join the Network</button> */}
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About NITC Alumni Network</h2>
        <p style={styles.sectionDescription}>
          The NIT Calicut Alumni Network connects graduates from all over the world. Join our vibrant community
          to stay updated, participate in exclusive events, and continue to make a difference.
        </p>
      </section>

      {/* Achievements Section */}
      <section style={styles.achievementsSection}>
        <h2 style={styles.sectionTitle}>Alumni Achievements</h2>
        <div style={styles.achievementsContainer}>
          <div style={styles.achievement}>
            <h3 style={styles.achievementTitle}>Innovator of the Year</h3>
            <p style={styles.achievementDescription}>Recognizing groundbreaking projects and innovation.</p>
          </div>
          <div style={styles.achievement}>
            <h3 style={styles.achievementTitle}>Global Impact</h3>
            <p style={styles.achievementDescription}>Alumni making a difference in communities worldwide.</p>
          </div>
          <div style={styles.achievement}>
            <h3 style={styles.achievementTitle}>Academic Excellence</h3>
            <p style={styles.achievementDescription}>Celebrating achievements in research and academia.</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section style={styles.eventsSection}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <p style={styles.sectionDescription}>
          Stay engaged and connected through our range of alumni events, from meet-ups to conferences.
        </p>
        <div style={styles.eventsContainer}>
          <div style={styles.event}>
            <h3 style={styles.eventTitle}>Annual Alumni Meet</h3>
            <p style={styles.eventDate}>January 15, 2024</p>
            <p style={styles.eventLocation}>NIT Calicut Campus</p>
          </div>
          <div style={styles.event}>
            <h3 style={styles.eventTitle}>Global Conference</h3>
            <p style={styles.eventDate}>March 10, 2024</p>
            <p style={styles.eventLocation}>Virtual Event</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
  },
  heroSection: {
    backgroundColor: '#4a90e2',
    color: '#fff',
    padding: '60px 20px',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  heroSubtitle: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  heroButton: {
    backgroundColor: '#fef7e5',
    color: '#4a90e2',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  aboutSection: {
    padding: '40px 20px',
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2f234f',
    marginBottom: '20px',
  },
  sectionDescription: {
    fontSize: '16px',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
  },
  achievementsSection: {
    padding: '40px 20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    marginBottom: '30px',
  },
  achievementsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    flexWrap: 'wrap',
  },
  achievement: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '250px',
    textAlign: 'left',
  },
  achievementTitle: {
    fontSize: '20px',
    color: '#4a90e2',
    marginBottom: '10px',
  },
  achievementDescription: {
    fontSize: '14px',
    color: '#333',
  },
  eventsSection: {
    padding: '40px 20px',
    backgroundColor: '#fcfcfc',
  },
  eventsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  event: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '5px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  eventTitle: {
    fontSize: '18px',
    color: '#4a90e2',
    marginBottom: '5px',
  },
  eventDate: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px',
  },
  eventLocation: {
    fontSize: '14px',
    color: '#999',
  },
};

export default Studenthome;
