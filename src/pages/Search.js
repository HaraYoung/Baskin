import React from "react";
import { NavLink } from "react-router-dom";

import NIBox from "../image/header/bg_check_off.gif";
import NIBoxCheck from "../image/header/dot_pink_s.gif";

import SearchStyled from "./styled/Search.module.scss";


const Search = () => {
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
                <img src={NIBox} alt=""/>
                  <img src={NIBoxCheck} alt='check' className={SearchStyled.Pinkcheck}/>
                </div>
                <span>계란</span>
              </span>
              <span>
                <img src={NIBox} alt="" />
                대두
              </span>
              <span>
                <img src={NIBox} alt="" />
                돼지고기
              </span>
              <span>
                <img src={NIBox} alt="" />
                땅콩
              </span>
              <span>
                <img src={NIBox} alt="" />밀
              </span>
              <span>
                <img src={NIBox} alt="" />
                복숭아
              </span>
              <span>
                <img src={NIBox} alt="" />
                우유
              </span>
              <span>
                <img src={NIBox} alt="" />
                없음
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
