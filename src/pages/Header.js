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
