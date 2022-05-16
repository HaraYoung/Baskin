## Header.js

```js
/**
* @filename Header.js
* @description 전체 Header영역-검색 영역과 nav메뉴 포함
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

import React from "react";
import styled from 'styled-components';

import headerStyles from "./styled/Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import SearchForm  from './Search';

import Facebook from "../image/icon/icon_facebook.png";
import Twitter from "../image/icon/icon_twitter.png";
import Blog from "../image/icon/icon_blog.png";
import Instagram from "../image/icon/icon_instgram.png";
import Youtube from "../image/icon/icon_youtube.png";
import Logo from "../image/header/logo_baskinrobbins.png";
import SearchImg from "../image/icon/icon_search.png";
import SearchExit from "../image/icon/btn_search_close.gif";


const BGSearch= styled.div`
  position: relative;
  top: 100px;
  left: 0;
 background-color: black;
 opacity: 0.5;
 height: 100%;
 width: 100%;
z-index: 0;
`;

const Header = () => {
  //Search영역 Ref참조
  const searchForm= React.useRef();
  //검색 영역의 상태값
  const [formOfen, setformOfen]= React.useState(false);
  const onMouseClick= (e)=>{
    setformOfen(!formOfen);
  }
  //nav메뉴영역 참조
  const navMenu= React.useRef();
  //nav메뉴 영역 상태값
  const [menuOfen,setMenuOfen]= React.useState(false);
  //hover이벤트 정의
  const onMouseOver= (e)=>{
    setMenuOfen(!menuOfen);
  }
  const onMouseOut= (e)=>{
    setMenuOfen(menuOfen);
  }

  return (
    <div className={headerStyles.headerArea}>
      <div className={headerStyles.headerWidth}>
        <div className={headerStyles.snsArea}>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Blog} alt="Blog" />
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className={headerStyles.etc}>
          <span>고객센터</span>
          <span>CONTACTUS</span>
          {formOfen ? (
              <img src={SearchExit} alt="Search Exit" onClick={onMouseClick}/>
            ):(
              <img src={SearchImg} alt="Search" onClick={onMouseClick}/>
              )}
        </div>
      </div>
      <div className={headerStyles.navTop}>
        <div className={headerStyles.navMenu}>
          <div className={headerStyles.member}>
            <span className={headerStyles.login}></span>
            <span className={headerStyles.join}></span>
          </div>
          <div className={headerStyles.menuNavArea} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span className={headerStyles.flavor}></span>
            <span className={headerStyles.menu}></span>
            <span className={headerStyles.NI}></span>
            <span className={headerStyles.event}></span>
            <span className={headerStyles.store}></span>
            <span className={headerStyles.about}></span>
          </div>
        </div>
      </div>
      {/*SearchForm 열려있을경우 HederMenu 비활성화*/}
      {menuOfen && (<HeaderMenu ref={navMenu}/>)}
     {formOfen && (<SearchForm ref={searchForm}/>)}
     <div>
     {formOfen && (<BGSearch ref={searchForm} />)}
     </div>
    </div>
  );
};

export default Header;

```

---
## Header.module.scss
```scss
body {
  padding: 0;
  margin: 0;
  color: #483834;
  font-size: 13px;
  font-family: "Nanum Barun Gothic", "나눔고딕", "NanumGothic", "돋움", "Dotum",
    sans-serif;
  line-height: 1.5;
  letter-spacing: -0.05em;
}
.headerArea {
  background: url("../../image/header/bg_header.gif") 50% 0 repeat-x;
  min-width: 1200px;
  border-top: 3px solid #ff7c98;
  border-bottom: 1px solid #3f291a;
  scroll-padding-top: 20px;
  position: relative;
  
  .headerWidth {
    display: flex;
    justify-content: space-around;
    padding-top: 1.5%;
    width: 80%;
    margin: auto;
    .snsArea {
      display: flex;
      align-items: center;
      img {
        margin: 5px;
        cursor: pointer;

      }
    }
    .etc {
      display: flex;
      align-items: center;
      span {
        letter-spacing: -1px;
        font-size: 11px;
        padding: 0 10px;
        cursor: pointer;
      }
      img {
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
}
.navTop {
  margin-top: 1.5%;
  border-top: 1px solid #e2d9d6;
  max-height: 46px;
  .navMenu {
    display: flex;
    justify-content: center;
    .member {
      display: flex;
      span {
        display: block;
        height: 46px;
        text-indent: -9999em;
        line-height: 46px;
        background: url(../../image/header/gnb_menu.png) no-repeat;
        margin: 0 20px;
        padding-right: 5px;
      }
      .login {
        width: 35px;
        background-position: 0px -1px;
      }
      .join {
        width: 27px;
        background-position: -97px -1px;
      }
    }
    .menuNavArea {
      display: flex;
      span {
        display: block;
        background: url(../../image/header/gnb_menu.png) no-repeat;
        height: 46px;
        text-indent: -9999em;
        line-height: 46px;
        margin: 0 10px;
        padding: 0 30px;
        cursor: pointer;
      }
      .flavor {
        width: 164px;
        background-position: -133px -3px;
      }
      .menu {
        width: 42px;
        background-position: -415px -3px;
      }
      .NI {
        width: 105px;
        background-position: -545px -3px;
      }
      .event {
        width: 42px;
        background-position: -737px -3px;
      }
      .store {
        width: 49px;
        background-position: -897px -3px;
      }
      .about {
        width: 49px;
        background-position: -1057px -3px;
      }
    }
  }
}
```

---

## HeaderMenu.js
```js
/**
* @filename HeaderMenu.js
* @description Header 안의 nav메뉴 영역
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

import React from "react";
import { NavLink } from "react-router-dom";
import headerMenuStyled from "./styled/HeaderMenu.module.scss";
import QRImg from "../image/header/img_happypoint_app.jpg";
import MonthlyImg from "../image/header/img_monthly_fom_220429.png";

const HeaderMenu = () => {
  return (
    <div className={headerMenuStyled.menuArea}>
      <div className={headerMenuStyled.menuWidth}>
        <div className={headerMenuStyled.imgArea}>
          <img src={QRImg} alt="QR" className={headerMenuStyled.QRimg} />
          <img src={MonthlyImg} alt="Monthly" />
        </div>
        <div className={headerMenuStyled.textArea}>
          <div className={headerMenuStyled.menu}>
            <p>
              <NavLink to="#">아이스크림</NavLink>
            </p>
            <p>
              <NavLink to="#">아이스크림케이크</NavLink>
            </p>
            <p>
              <NavLink to="#">음료</NavLink>
            </p>
            <p>
              <NavLink to="#">커피</NavLink>
            </p>
            <p>
              <NavLink to="#">디저트</NavLink>
            </p>
          </div>
          <div className={headerMenuStyled.NI}>
            <p>
              <NavLink to="#">아이스크림</NavLink>
            </p>
            <p>
              <NavLink to="#">음료</NavLink>
            </p>
            <p>
              <NavLink to="#">커피</NavLink>
            </p>
          </div>
          <div className={headerMenuStyled.event}>
            <p>
              <NavLink to="#">진행중인이벤트</NavLink>
            </p>
            <p>
              <NavLink to="#">당첨자발표</NavLink>
            </p>
          </div>
          <div className={headerMenuStyled.store}>
            <p>
              <NavLink to="#">매장찾기</NavLink>
            </p>
            <p>
              <NavLink to="#">고객센터</NavLink>
            </p>
            <p>
              <NavLink to="#">단체주문</NavLink>
            </p>
          </div>
          <div className={headerMenuStyled.about}>
            <p>
              <NavLink to="#">공지사항</NavLink>
            </p>
            <p>
              <NavLink to="#">보도자료</NavLink>
            </p>
            <p>
              <NavLink to="#">채용정보</NavLink>
            </p>
            <p>
              <NavLink to="#">점포개설문의</NavLink>
            </p>
            <p>
              <NavLink to="#">CONTACTUS</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;

```

---

## HederMenu.module.scss

```scss

.menuArea {
  max-height: 300px;
  border-bottom: 1px solid #3f291a;
  .menuWidth {
    width: 80%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    .imgArea {
      display: flex;
      align-items: center;
    }
    .textArea {
      display: flex;
      width: 100%;
      margin-left: 1.5%;
      div {
        text-align: center;
        padding: 0 30px;
        a {
            text-decoration: none;
            color: #928883;
            &:hover {
              color:#ff7c98;
            }
        }
      }
      .NI {
          margin-left:1%;
      }
      .event {
        margin-left:3.5%;
      }
      .store {
        margin-left:-1%;

      }
      .about{
        margin-left:1.5%;
      }
    }
  }
}

```

---
## Search.js

```js
/**
* @filename Search.js
* @description Header 안의 Search영역- Header의 아이콘 클릭시 나타나는 영역
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

import React from "react";
import { NavLink } from "react-router-dom";

import NIBox from "../image/header/bg_check_off.gif";
import NIBoxCheck from "../image/header/dot_pink_s.gif";

import SearchStyled from "./styled/Search.module.scss";


const Search = () => {
  //체크박스의 상태값
  const [checkState,setCheckState] = React.useState(false);
  //체크박스 참조변수
  const checkRef= React.useRef();
  //체크박스 클릭 이벤트
  const onClickCheck= (e)=>{
    setCheckState(!checkState)
  }

  return (
    <div className={SearchStyled.SearchArea}>
      <div className={SearchStyled.TextArea}>
        <div className={SearchStyled.searchForm}>
          <p>
            <span className={SearchStyled.spanTitle}>제품명</span>
            <select>
              <option>전체</option>
              <option>아이스크림</option>
              <option>아이스크림</option>
              <option>음료</option>
              <option>커피</option>
              <option>디저트</option>
              <option>block pack</option>
              <option>ready pack</option>
            </select>
            <input type="text" />
          </p>
          <p>
            <span className={SearchStyled.spanTitle}>알레르기 성분</span>
            <div className={SearchStyled.checkArea}>
              <span className={SearchStyled.oneCheck}>
                <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>계란</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>대두</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>돼지고기</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>땅콩</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>밀</span>
                </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>복숭아</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>우유</span>
              </span>
              <span className={SearchStyled.oneCheck}>
              <div className={SearchStyled.boxImg}>
                <img src={NIBox} alt="" ref={checkRef}  onClick={onClickCheck}/>
                  {checkState && <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>}
                </div>
                <span>없음</span>
              </span>
            </div>
          </p>
        </div>
        <div className={SearchStyled.TagForm}>
          <p className={SearchStyled.tagTitle}>
            <span className={SearchStyled.spanTitle}>해시태그</span>
            <input type="text" />
          </p>
          <p className={SearchStyled.oftenTag}>
            <p>•자주찾는 해시태그</p>
            <span>#피카피카피카츄</span>
            <span>#피카츄초코바나나블라스트</span>
            <span>#클클잠만보밀키소다블라스트</span>
            <span>#고라파덕아이스크림콘</span>
            <span>#푸린아이스크림콘</span>
            <span>#포켓몬스터</span>
          </p>
        </div>
      </div>
      <div className={SearchStyled.buttonArea}>
        <NavLink to="#">검색</NavLink>
      </div>
    </div>
  );
};

export default Search;
```
---

## Search.module.scss
```scss

.SearchArea {
  position: relative;
  width: 1200px;
  margin: auto;
  padding: 25px 0px;
  z-index:5;
  .TextArea {
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      height: 32px;
      padding: 8px 1px 8px 10px;
      border: 0;
      background: #efefef;
      font-size: 13px;
      line-height: 16px;
      box-sizing: border-box;
    }
    .spanTitle {
      font-size: 13px;
      color: #2f231c;
      width: 30%;
      letter-spacing: -0.1em;
      font-weight: 500;
      &:last-child {
        display: flex;
      }
    }
    .checkArea {
      width: 100%;
      .oneCheck{
        cursor: pointer;
        width: 24%;
      }
      span {
        float: left;
        width: 50%;
        .boxImg{
          position: relative;
        float: left;
          .Pinkcheck{
              position: absolute;
            top:35%;
            left: 30%;
          }
        }
        img {
          margin-right: 5px;
        }
      }
    }
  }
  .searchForm {
    margin-right: 5%;
    padding-right: 20px;
    width: 50%;
    p {
      display: flex;
      padding: 10px;
    }
    select {
      background: #fff;
      border: 1px solid #d1cecc;
      border-radius: 4px;
      width: 128px;
      color: #636363;
      margin-right: 14px;
    }
  }
  .TagForm {
    width: 50%;
    padding-top:1%;
    .tagTitle {
      display: flex;
    }
    .oftenTag {
      padding: 0 10px;
      letter-spacing: -0.1em;
      p {
        color: #9c9c9c;
        font-size: 13px;
        margin-bottom: 3px;
      font-weight: 500;

      }
      span {
        font-size: 13px;
        color: #ff7c98;
        margin-right: 6px;
        cursor: pointer;
      }
    }
  }
}
.buttonArea {
  text-align: center;
  padding:1%;
  a {
    background: #ff7c98;
    color: #fff;
    font-size: 15px;
    line-height: 37px;
    border-radius: 18px;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 55px;
  }
}

```

---
## MainEvent.js
```js
/**
* @filename MainEvent.js
* @description Header와 Main사이의 이벤트 영역
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

import React from 'react';
import EventImg from '../image/main/1714824579.jpg';


const MainEvent = () => {
  return (
    <div>
        <img src={EventImg} alt="event" style={{width: '100%', objectFit:'cover'}}/>
    </div>
  )
}

export default MainEvent
```

---

## Main.js
```js
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
```
---
### Slide.scss

```scss
.SearchArea {
  position: relative;
  width: 1200px;
  margin: auto;
  padding: 25px 0px;
  z-index:5;
  .TextArea {
    display: flex;
    justify-content: center;
    input {
      width: 100%;
      height: 32px;
      padding: 8px 1px 8px 10px;
      border: 0;
      background: #efefef;
      font-size: 13px;
      line-height: 16px;
      box-sizing: border-box;
    }
    .spanTitle {
      font-size: 13px;
      color: #2f231c;
      width: 30%;
      letter-spacing: -0.1em;
      font-weight: 500;
      &:last-child {
        display: flex;
      }
    }
    .checkArea {
      width: 100%;
      .oneCheck{
        cursor: pointer;
        width: 24%;
      }
      span {
        float: left;
        width: 50%;
        .boxImg{
          position: relative;
        float: left;
          .Pinkcheck{
              position: absolute;
            top:35%;
            left: 30%;
          }
        }
        img {
          margin-right: 5px;
        }
      }
    }
  }
  .searchForm {
    margin-right: 5%;
    padding-right: 20px;
    width: 50%;
    p {
      display: flex;
      padding: 10px;
    }
    select {
      background: #fff;
      border: 1px solid #d1cecc;
      border-radius: 4px;
      width: 128px;
      color: #636363;
      margin-right: 14px;
    }
  }
  .TagForm {
    width: 50%;
    padding-top:1%;
    .tagTitle {
      display: flex;
    }
    .oftenTag {
      padding: 0 10px;
      letter-spacing: -0.1em;
      p {
        color: #9c9c9c;
        font-size: 13px;
        margin-bottom: 3px;
      font-weight: 500;

      }
      span {
        font-size: 13px;
        color: #ff7c98;
        margin-right: 6px;
        cursor: pointer;
      }
    }
  }
}
.buttonArea {
  text-align: center;
  padding:1%;
  a {
    background: #ff7c98;
    color: #fff;
    font-size: 15px;
    line-height: 37px;
    border-radius: 18px;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 55px;
  }
}
```

---

## BREvent.js
```js
/**
* @filename BREvent.js
* @description BREvent영역- swiper 라이브러리를 이용하여 슬라이드 구현
* @author: 박세영 (qkrtpdud9899@gmail.com)
*/

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
              <p className='FirstP'>배달의 민족에서 빠르게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={YGY} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>요기요에서 손쉽게 주문하세요!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Kakao} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>카카오톡 주문하기에서 편리하게 주문하세요!</p>
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
              <p className='FirstP'>기아 멤버스 최대 50% 제휴 혜택</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={BR} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={OnlineText} alt="" />
              <p className='FirstP'>2022 배스킨라빈스 특별한 제휴혜택</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={COLD} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>고소한 오트밀크와 깔끔한 콜드브루의 만남,콜드브루 오트라떼 출시!</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={KT} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>KT멤버십 고객이라면 누구나 파인트30%할인!</p>
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
              <p className='FirstP'>현대카드 M포인트 50% 사용</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Card} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>제휴 할인 카드 혜택 안내</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={Hangul} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={OnlineText} alt="" />
              <p className='FirstP'>2018한글날 기념 무료 글꼴 공개! 배스킨라빈스체</p>
              <p>상시진행</p>
            </div>
          </div>
          <div className="BRSlideArea">
            <div className="BRImg">
              <img src={CUP} alt="" />
            </div>
            <div className="BRTextArea">
              <img src={StoreText} alt="" />
              <p className='FirstP'>1회용 컵 사용 줄이기 안내</p>
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
              <p className='FirstP'>2022년 1분기 고객 BEST 칭찬점포 안내</p>
              <p>상시진행</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BREvent;
```

---

## BRSlide.scss
```scss
.BRArea {
    width: 100%;
    text-align: center;
    padding: 3% 0;
    .mySwiper{
        padding: 3% 0;
        width: 100%;
    }
    .BRSlideArea {
    height: 465px;
    cursor: pointer;
    float: left;
    padding: 0 10px;
    .BRImg {
      img {
        height: 288px;
        width: 288px;
      }
    }
    .BRTextArea {
      text-align: left;
      img {
        width: 114px;
        height: 22px;
      }
      p {
        letter-spacing: -2px;
        margin: 11px 0;
        font-weight: 300;
        color: #948780;
      }
      .FirstP {
        color: #2f231c;
        font-size: 17px;
        line-height: 23px;
        font-weight: bold;
        letter-spacing: -3.5px;
        border: 1px solid red;

      }
    }
    &::after{
        content: '';
        clear: both;
        float: none;
        display: block;
    }
  }

  .swiper-pagination-bullet {
    background: #cdccd5;
    width: 10px;
    height: 10px;
    margin-right:15px;
  }
  .swiper-pagination-bullet-active {
    background: #301d17 !important;
    width: 10px;
    height: 10px;
  }
}
```
