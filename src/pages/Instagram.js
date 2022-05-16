import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../img/tit_sns.png";

const InstaContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 30px;

  .instalogo {
    display: block;
    margin-top: -7px;
    padding-left: -60%;
  }

  .photo {
    padding: 20px 9%;
  }
  ul {
    margin-top: 20px;
    width: 100%;
    list-style: none;
    box-sizing: border-box;
    li {
      float: left;
      width: 20%;
      height: 237px;
      padding: 1.5px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  span {
    color: #ff7c98;
  }
`;
const Instagram = () => {
  const [instaList, setInstaList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let json = null;
      try {
        const response = await axios.get("http://localhost:3001/instagram");
        json = response.data;
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }

      if (json != null) {
        setInstaList(json);
      }
    })();
  }, []);
  return (
    <InstaContainer>
      <div>
        <Link to="/">
          <img className="instalogo" src={img1} alt="instagram" />
        </Link>
      </div>
      <div className="photo">
        <ul>
          {instaList.map((v, i) => {
            return (
              <li key={i} item={v}>
                <Link to="/">
                  <img src={v.src} alt="instagram${i}" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </InstaContainer>
  );
};

export default Instagram;
