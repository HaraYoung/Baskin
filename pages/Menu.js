import React from "react";
import styled from "styled-components";
import img1 from "../img/img_menu_list.png";
import img2 from "../img/bg_menu.jpg";
import img3 from "../img/h_menu.png";

const MenuContainer = styled.div`
  .center {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0;
    margin-top: -10px;
  }
  .img3 {
    display: block;
    position: absolute;
    top: 10%;
  }

  .img1 {
    display: block;
    position: absolute;
    top: 18%;
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <div className="center">
        <img className="img3" src={img3} alt="img3" />
        <div className="back">
          <img className="img2" src={img2} alt="img1" />
        </div>
        <img className="img1" src={img1} alt="img1" />
      </div>
    </MenuContainer>
  );
};

export default Menu;
