import React from "react";
import styled from "styled-components";
import img1 from "../img/sns_facebook.png";
import img2 from "../img/sns_twitter.png";
import img3 from "../img/sns_blog.png";
import img4 from "../img/sns_instagram.png";
import img5 from "../img/sns_youtube.png";
import img6 from "../img/h_sns.png";

const MenuContainer = styled.div`
  .center {
    display: flex;
    flex-flow: column;
    align-items: center;
    border-bottom: 1px solid #dcd7d1;
  }

  .img6 {
    padding: 90px 0 30px 0;
  }

  .logo img {
    padding: 9px;
    padding-bottom: 70px;
  }
`;

const Store = () => {
  return (
    <MenuContainer>
      <div className="center">
        <img className="img6" src={img6} alt="img6" />
        <div className="logo">
          <img className="img1" src={img1} alt="img1" />
          <img className="img2" src={img2} alt="img2" />
          <img className="img3" src={img3} alt="img3" />
          <img className="img4" src={img4} alt="img4" />
          <img className="img5" src={img5} alt="img5" />
        </div>
      </div>
    </MenuContainer>
  );
};

export default Store;
