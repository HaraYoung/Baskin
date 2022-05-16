import React from "react";
import styled from "styled-components";
import img1 from "../img/button/1.png";
import img2 from "../img/button/2.png";
import img3 from "../img/button/3.png";
import img4 from "../img/button/4.gif";
import img5 from "../img/button/5.png";
import img6 from "../img/button/6.png";
import logo from "../img/footer_logo.png";
const FooterContainer = styled.div`
  .center {
    border-top: 1px solid #feaf2b;

    color: #483834;
    font-size: 13px;
    line-height: 1.5;
    font-family: "Nanum Barun Gothic", "나눔고딕", "NanumGothic", "돋움",
      "Dotum", sans-serif;
    line-height: 1.5;
    letter-spacing: -0.05em;
  }

  .txt {
    margin: 0 14%;
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;
  }

  .logos img {
    height: 31px;
  }

  .logos .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
    background-color: #eee;
  }
  .logo {
    padding: 0 300px;
  }
  span {
    color: #ff7c98;
  }

  .img7 {
    display: flex;
    padding: 50px 45%;
  }

  .box {
    display: flex;
    flex-flow: column;
    font-size: 11px;
    color: #635b56;
    margin: -30px 0;
  }

  .box1 {
    display: flex;
    justify-content: space-evenly;
    padding: 0 30%;
  }

  .box2 {
    display: flex;
    margin: -20px 0;
    justify-content: space-evenly;
    padding: 0 40%;
  }

  .box .address {
    margin: -10px 0;
    display: flex;
    justify-content: center;

    padding-top: 12px;
    color: #b1adab;
    font-size: 11px;
    padding-bottom: 30px;
  }

  select {
    border: 1px solid #eee;
    width: 130px;
    height: 30px;
    opacity: 70%;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <div className="center">
        <div className="txt">
          <p>점포개설문의</p>
          <p>채용문의</p>
          <p>윤리신고센터</p>
          <p>이용약관</p>
          <p>
            <span>
              <b>개인정보처리방침</b>
            </span>
          </p>
          <p>영상정보처리기기운영관리방침</p>
          <p>거래희망회사 사전등록</p>
        </div>
        <div className="logos">
          <div className="logo">
            <img className="img1" src={img1} alt="img1" />
            <img className="img2" src={img2} alt="img2" />
            <img className="img3" src={img3} alt="img3" />
            <img className="img4" src={img4} alt="img4" />
            <img className="img5" src={img5} alt="img5" />
            <img className="img6" src={img6} alt="img6" />
            <select name="select">
              <option>FAMILY SITE</option>
              <option>배스킨 스쿨</option>
              <option>SPC그룹사이트</option>
              <option>SPCMAGAZINE</option>
              <option>BR코리아</option>
              <option>해피포인트카드</option>
              <option>파스쿠찌</option>
              <option>삼립</option>
              <option>파리바게트</option>
              <option>던킨도너츠</option>
            </select>
          </div>
        </div>

        <div className="footerlogo"></div>
        <img className="img7" src={logo} alt="img6" />

        <div className="box">
          <div className="box1">
            <p>사업자 등록번호 : 303-81-09535</p>
            <p>비알코리아(주) 대표이사 도세호</p>
            <p>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</p>
          </div>

          <div className="box2">
            <p>TEL : 080-555-3131</p>
            <p>개인정보관리책임자 : 김경우</p>
          </div>
          <div className="address">
            <p class="copyright">
              Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
