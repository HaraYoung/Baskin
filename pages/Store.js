import React from "react";
import styled from "styled-components";
import img1 from "../img/img_store.jpg";
import img2 from "../img/img_happyorder_delivery.png";
import img3 from "../img/h_store.png";
import img4 from "../img/h_happyorder_delivery.png";

const MenuContainer = styled.div`
  .center {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    padding: 30px;
  }
  .text img {
    padding: 70px 220px;
  }
  .img3 {
    margin-left: 50px;
  }

  .img4 {
    margin-right: 10px;
  }

  .img1 {
  }
`;

const Store = () => {
  return (
    <MenuContainer>
      <div className="center">
        <div className="text">
          <img className="img3" src={img3} alt="img3" />
          <img className="img4" src={img4} alt="img4" />
        </div>
        <div className="img12">
          <img className="img1" src={img1} alt="img1" />
          <img className="img2" src={img2} alt="img2" />
        </div>
      </div>
    </MenuContainer>
  );
};

export default Store;
