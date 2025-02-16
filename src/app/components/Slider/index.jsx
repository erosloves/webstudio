"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./index.module.css";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      className={styles.swiper}
      modules={[Navigation, Pagination]}
    >
      {cases.map((el, n) => {
        return (
          <SwiperSlide className={styles.slide} key={n}>
            <img src={`/cases/${el.img}`} alt={`/cases/${el.img}`} />
            <span>{el.org}</span>
            <span>{el.desc}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const cases = [
  {
    org: "yandex",
    desc: "search engine",
    img: "/Yandex_Logo_2021.png",
  },
  {
    org: "1x win",
    desc: "online casino",
    img: "/a21250.jpg",
  },
  {
    org: "vk",
    desc: "social media",
    img: "/6c542348a130bcf0910164460adba635.jpg",
  },
];

export default Slider;
