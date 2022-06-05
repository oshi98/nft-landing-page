import React from "react";
import home from "../assets/home.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="subtitle">Launching Soon</p>
          <h1 className="title">
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <p className="description">
            Don't miss out on the relase of our new NFT. Sign up below to
            receive updates.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
