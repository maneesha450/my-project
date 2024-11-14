import React from "react";
import "./Gallery.css";
import Navbar from "./Navbar";
import Footer from './Footer';
const images = [
  "https://th.bing.com/th/id/OIP.HzGwGuEGVuQcjAYvJpi13wHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.yYmXgZY1hjSWFmYY5JQ3KgAAAA?w=233&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://nitc.ac.in/xc-assets/images/thumb/life-at-nitc-video.webp",
  "https://www.addressguru.in/images/1594722607.png",
  "https://th.bing.com/th/id/OIP.lcw3thzW7xCOARTw3yqvdAHaFj?w=218&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://timesofindia.indiatimes.com/thumb/msid-66022567,imgsize-171987,width-400,resizemode-4/66022567.jpg",
  "https://i.ytimg.com/vi/FuLSKIfsfBY/maxresdefault.jpg"
]

const Gallery = () => {
  return (
    <div>
        <Navbar/>
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
