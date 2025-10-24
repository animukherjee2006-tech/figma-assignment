import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState("about");

  const galleryImages = [
    "https://picsum.photos/300?random=1",
    "https://picsum.photos/300?random=2",
    "https://picsum.photos/300?random=3",
  ];

  return (
    <div className="app-container">
      {/* Left side */}
     <div className="left-panel">

      <h2>Official Instructions</h2>
      <ol>
        <li></li>
        <li></li>
      </ol>
     </div>

      {/* Right side */}
      <div className="right-panel">
        {/* Tabs */}
        <div className="tabs">
          {["about", "experiences", "recommended"].map((index) => (
            <button
              key={index}
              onClick={() => setTab(index)}
              className={`tab-button ${tab === index ? "active" : ""}`}
            >
              {index.charAt(0).toUpperCase() + index.slice(1)}
            </button>
          ))}
        </div>

        {/* for the content Content */}
        <div className="tab-content">
          {tab === "about" && (
            <p>
              Hello! I’m <span className="highlight">Aniruddha Mukherjee.</span>
               a 2nd year Betech computer science & engineering student of Bengal College of engineering & technology<br />
              I am passionated to learn about Dev. i am skilled in Html,css ,java script, React js, Data structure & algorithim and c,c++.
              currently working on gathering some beautiful experiences.
            </p>
          )}
          {tab === "experiences" && (
            <p>
              i makes my portfolio & i have lots of pratices in my hackerrank profile.
            </p>
          )}
          {tab === "recommended" && (
            <p>
              Dev is a dedicated and goal-oriented professional with a passion
              for client success. Highly recommended by peers.
            </p>
          )}
        </div>

        {/* Gallery */}
        <div className="gallery">
          <div className="gallery-header">
            <h2>Gallery</h2>
            <button className="add-image">+ Add Image</button>
          </div>
          <div className="gallery-images">
            {galleryImages.map((img, i) => (
              <img key={i} src={img} alt={`gallery-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

