import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./styles/swiper.css";
import "../styles/about-cats.css";
import CatCard from "../components/CatCard";

const AboutCats = () => {
  const catData = [
    { id: 1, name: "British Shorthair Cat", img: "" },
    { id: 2, name: "Sphynx", img: "" },
    { id: 3, name: "Siamese Сat", img: "" },
    { id: 4, name: "Abyssinian Сat", img: "" },
    { id: 5, name: "Munchkin Сat", img: "" },
    { id: 6, name: "Burmese Сat", img: "" },
    { id: 7, name: "American Curl", img: "" },
    { id: 8, name: "Exotic Shorthair", img: "" },
    { id: 9, name: "Tabby Cat", img: "" },
  ];

  // Разделяем catData на три подмассива
  const slidesData = [
    catData.slice(0, 3),
    catData.slice(3, 6),
    catData.slice(6, 9),
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
