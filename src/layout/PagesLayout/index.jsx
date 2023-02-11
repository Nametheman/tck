import React, { Fragment, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import UserContent from "./UserContent";

const Index = ({ content1, dashboard }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  console.log(isAuthenticated);

  useEffect(() => {
    console.log("logged in");
  }, [isAuthenticated]);

  return (
    <Fragment>
      {!isAuthenticated ? (
        <Container>
          <Navbar />
          <Content>{content1}</Content>
          <Footer />
        </Container>
      ) : (
        <Container>
          <PageContainer>
            <Sidebar />
            <View>
              <UserContent dashboard={dashboard} />
              <Footer />
            </View>
          </PageContainer>
        </Container>
      )}
    </Fragment>
  );
};

export default Index;

const Container = styled.div`
  min-height: 100vh;
`;

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const View = styled.div`
  min-height: 100vh;
  width: calc(100% - 200px);
`;
