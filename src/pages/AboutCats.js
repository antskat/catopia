import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./styles/swiper.css";
import "../styles/about-cats.css";
import CatCard from "../components/CatCard";
import BritishShorthairCat from "../img/british-shortcair-cat.png";
import Sphynx from "../img/sphynx.png";
import SiameseCat from "../img/siamese-cat.png";
import AbyssinianCat from "../img/abyssinian-cat.png";
import MunchkinCat from "../img/munchkin-cat.png";
import BurmeseCat from "../img/burmese-cat.png";
import AmericanCurlCat from "../img/american-curl-cat.png";
import ExoticShortcairCat from "../img/exotic-shortcair-cat.png";
import TabbyCat from "../img/tabby-cat.png";

const AboutCats = () => {
  const catData = [
    { id: 1, name: "British Shorthair Cat", img: BritishShorthairCat },
    { id: 2, name: "Sphynx", img: Sphynx },
    { id: 3, name: "Siamese Сat", img: SiameseCat },
    { id: 4, name: "Abyssinian Сat", img: AbyssinianCat },
    { id: 5, name: "Munchkin Сat", img: MunchkinCat },
    { id: 6, name: "Burmese Сat", img: BurmeseCat },
    { id: 7, name: "American Curl", img: AmericanCurlCat },
    { id: 8, name: "Exotic Shorthair", img: ExoticShortcairCat },
    { id: 9, name: "Tabby Cat", img: TabbyCat },
    { id: 10, name: "Soamli cat", img: "" },
    { id: 11, name: "Ragdoll", img: "" },
    { id: 12, name: "Cornish Rex", img: "" },
    { id: 13, name: "Maine Coon", img: "" },
    { id: 14, name: "Persian Сat", img: "" },
    { id: 15, name: "Charteux", img: "" },
    { id: 16, name: "Bombany Cat", img: "" },
    { id: 17, name: "Bengal Cat", img: "" },
    { id: 18, name: "Oriental Cat", img: "" },
    { id: 19, name: "Norwegian Forest Cat", img: "" },
    { id: 20, name: "Domestic Shortcair Cat", img: "" },
    { id: 21, name: "Birman Сat", img: "" },
    { id: 22, name: "Australian Mist", img: "" },
    { id: 23, name: "Scottish Fold Сat", img: "" },
    { id: 24, name: "Burmese Сat", img: "" },
    { id: 25, name: "American Curl", img: "" },
    { id: 26, name: "Exotic Shorthair", img: "" },
    { id: 27, name: "Tabby Cat", img: "" },
  ];

  // Разделяем catData на три подмассива
  const slidesData = [
    catData.slice(0, 9),
    catData.slice(9, 18),
    catData.slice(18, 27),
  ];

  return (
    <>
      <section className="about-hero-section">
        <div className="container">
          <h1 className="hero-title">Everything about cats</h1>
          <p className="hero-text">
            Here you will find information about cat breeds and their
            characteristics. Many and even more useful and interesting facts
            await you!
          </p>
        </div>
      </section>
      <section className="swiper-section">
        <div className="container">
          <h2 className="swiper-title">Cat breed library</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="swiper"
          >
            {slidesData.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <ul className="swiper-list list">
                  {slide.map((cat) => (
                    <CatCard key={cat.id} data={cat} />
                  ))}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutCats;
