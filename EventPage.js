import React, { useState } from "react";
import "./EventPage.css";
import Navbar from "./Navbar";
import Footer from './Footer';
// Sample events data
const sampleEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "April 15, 2024",
    location: "San Francisco, CA",
    image: "https://th.bing.com/th/id/OIP.HzGwGuEGVuQcjAYvJpi13wHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Join us for a day of insightful tech talks and networking with industry leaders.",
  },
  {
    id: 2,
    title: "Music Festival",
    date: "May 20, 2024",
    location: "New York, NY",
    image: "https://th.bing.com/th/id/OIP.yYmXgZY1hjSWFmYY5JQ3KgAAAA?w=233&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Experience the best live music and vibrant atmosphere.",
  },
  {
    id: 3,
    title: "Art Workshop",
    date: "June 10, 2024",
    location: "Austin, TX",
    image: "https://nitc.ac.in/xc-assets/images/thumb/life-at-nitc-video.webp",
    description: "Unleash your creativity with our hands-on art workshop.",
  },
  {
    id: 4,
    title: "Business Seminar",
    date: "July 5, 2024",
    location: "Chicago, IL",
    image: "https://nitc.ac.in/xc-assets/images/thumb/life-at-nitc-video.webp",
    description: "Learn key strategies for business success.",
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Navbar/>
    <div className="events-page">
      <div className="events-header">
        <h1 style={{marginLeft:"5%"}}>Upcoming Events</h1>
        <div className="events-search">
          <input
            type="text"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EventsPage;
