import React from "react";
import { MuteSvg, HeartSvg, VetSvg, HouseSvg } from "../components/Svg.js";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to world of cats!</h1>
          <p className="hero-text">
            According to many people, cats are the best pets. Not a day <br />
            goes by without someone posting or watching a video with <br />
            these cuties. We’ve created a platform for you to fully immerse
            <br /> yourself in the world of cats
          </p>
        </div>
      </section>
      <section className="why-cats-section">
        <div className="container">
          <h2 className="why-cats-title">Why cats?</h2>
          <ul className="why-cats-list list">
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <MuteSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">They are quiet</h3>
                <p className="why-cats-list-text">(nearly always)</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <HeartSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">Cats are good</h3>
                <p className="why-cats-list-text">for your healthy</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <VetSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">They have</h3>
                <p className="why-cats-list-text">a long lifespan</p>
              </div>
            </li>
            <li className="why-cats-list-item">
              <div className="why-cats-svg-container">
                <HouseSvg />
              </div>
              <div className="why-cats-text-container">
                <h3 className="why-cats-list-title">You don’t need</h3>
                <p className="why-cats-list-text">to walk them</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
