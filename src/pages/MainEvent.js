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