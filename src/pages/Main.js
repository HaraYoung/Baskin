/**
* @filename Main.js
* @description Main 슬라이더 영역- swiper 라이브러리를 이용하여 슬라이더 구현
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './styled/Slide.scss';
import Image1 from '../image/main/1714824551.jpg';
import Image2 from '../image/main/1672885751.png';
import Image3 from '../image/main/1649133684.png';
import Image4 from '../image/main/1714816944.png';
import Image5 from '../image/main/1714808856.png';
import Image6 from '../image/main/1667440402.png';
import Image7 from '../image/main/1667383155.png';
import Image8 from '../image/main/1643869369.png';
import Image9 from '../image/main/1664934495.png';
import Image10 from '../image/main/1649140992.png';

const Main=() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide><img src={Image1} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image2} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image3} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image4} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image5} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image6} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image7} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image8} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image9} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Image10} alt=''/></SwiperSlide>
    </Swiper>
  );
};

export default Main;
