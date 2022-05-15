import React from "react";

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




const Header = () => {
  const block={
    display: 'block'
  }
  const none= {
    display: 'none'
  }
  const searchForm= React.useRef();

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
          <img src={SearchImg} alt="Search" />
        </div>
      </div>
      <div className={headerStyles.navTop}>
        <div className={headerStyles.navMenu}>
          <div className={headerStyles.member}>
            <span className={headerStyles.login}></span>
            <span className={headerStyles.join}></span>
          </div>
          <div className={headerStyles.menuNavArea} onMouseOver={e=>{ }}>
            <span className={headerStyles.flavor}></span>
            <span className={headerStyles.menu}></span>
            <span className={headerStyles.NI}></span>
            <span className={headerStyles.event}></span>
            <span className={headerStyles.store}></span>
            <span className={headerStyles.about}></span>
          </div>
        </div>
      </div>
      <SearchForm/>
    </div>
  );
};

export default Header;
