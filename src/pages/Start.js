import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import title from "../images/title.png";

const Start = () => {
  return (
    <StartScreenContainer>
      <Logo>
        <LogoImg src={logo} alt="logo" />
        <TitleImg src={title} alt="title" />
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

const LogoImg = styled.img`
  width: 168px;
  height: 51px;
`;

const TitleImg = styled.img`
  width: 164px;
  height: 46px;
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
