import React, { Fragment } from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Container>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Index;

const Container = styled.div``;
