import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./styled/BRSlide.scss";

import BRTitle from "../image/BR-event/h_event.png";

import Delivery from "../image/BR-event/banner_delivery.png";
import BM from "../image/BR-event/banner_delivery_bm.png";
import YGY from "../image/BR-event/banner_delivery_ygy.png";
import Kakao from "../image/BR-event/banner_delivery_kakao.png";
import KIA from "../image/BR-event/1670146074.png";
import BR from "../image/BR-event/1667538956.png";
import COLD from "../image/BR-event/1659436130.png";
import KT from "../image/BR-event/1643869329.png";
import Mpoint from "../image/BR-event/1667382917.png";
import Card from "../image/BR-event/1639297260.png";
import Hangul from "../image/BR-event/1570702843.png";
import CUP from "../image/BR-event/1578277305.png";
import BEST from "../image/BR-event/banner_praise_2022-1.png";
import StoreText from "../image/BR-event/stit_store.gif";
import OnlineText from "../image/BR-event/stit_online.gif";

const BREvent = () => {
  return (
    <div className="BRArea">
      <div className="BRtitle">
        <img src={BRTitle} alt="BRTitle" />
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Delivery} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={BM} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={YGY} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Kakao} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={KIA} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={OnlineText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={BR} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={OnlineText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={COLD} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={KT} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Mpoint} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Card} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Hangul} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={OnlineText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={CUP} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={BEST} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>해피 오더 딜리버리로 간편하게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BREvent;
