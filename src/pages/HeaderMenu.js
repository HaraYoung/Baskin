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
