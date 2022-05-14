import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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

const slideStyle={

}


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
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Main;