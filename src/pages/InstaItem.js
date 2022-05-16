import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  border-top: 1px solid #eee;
`;
const InstaItem = ({ instagram: { src, background } }) => {
  return (
    <div>
      <ListItem>
        <img className="image" src="{image" />
      </ListItem>
    </div>
  );
};

export default InstaItem;
