import React from "react";
import styled from "styled-components";
import lists from "../../images/lists.png";
import chat from "../../images/chat.png";
import heart from "../../images/heart.png";
import UserInfo from "./UserInfo"
import ListItem from "./ListItem"

const Contents = () => {
  return (
    <Content>
        <UserInfo/>
        <ListContainer>
          <ListItem icon={heart} text="찜 목록" />
          <Divider />
          <ListItem icon={chat} text="채팅 목록" />
          <Divider />
          <ListItem icon={lists} text="거래 내역" />
        </ListContainer>
      </Content>
  )
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;


const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #ffc700;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  border-radius: 10px;
  background-color: #ffee94;
`;



export default Contents;
