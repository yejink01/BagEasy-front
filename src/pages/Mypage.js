import React from "react";
import styled from "styled-components";
import Head from "../components/Common/Head";
import Contents from "../components/Mypage/Contents";

const MyPage = () => {
  return (
    <MyPageContainer>
      <Head />
      <Contents />
      <Footer>
        <Logout>로그아웃</Logout>
      </Footer>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 230px;
`;

const Logout = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

export default MyPage;
