import React from "react";
import styled from "styled-components";
import First from "./FirstSection/First";
import Second from "./SecondSectio/Second";
import Third from "./ThirdSection/Third";
import Fourth from "./FourthSection/Fourth";

const Home = () => {
  return (
    <Container>
      <First />
      <Second />
      <Third />
      <Fourth />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  position: relative;
`;
