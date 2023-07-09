import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import title from "../images/title.png";

const Start = () => {
  return (
    <StartScreenContainer>
      <Logo>
        <img src={logo} alt="Logo" />
        <img src={title} alt="title" />
      </Logo>
      <Button>시작하기</Button>
    </StartScreenContainer>
  );
};

const StartScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Button = styled.button`
  justify-content: center;
  padding: 10px 20px;
  width: 327px;
  font-size: 20px;
  background-color: #ffc700;
  color: #ffffff;
  font-weight: bolder;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 60px;
`;

export default Start;
