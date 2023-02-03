import React from "react";
import styled from "styled-components";
import bg from "../../../assets/images/img-bg1.jpg";

const Home = () => {
  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  padding: 60px 80px;
  background: url(${bg}), no-repeat;
  display: flex;
`;
