import React from "react";
import styled from "styled-components";
import bg from "../../../../assets/images/img-bg3.png";
import Slide from "./Slide";
import btcGirl from "../../../../assets/images/Bitcoin.gif";

const Third = () => {
  return (
    <Container>
      <Header>
        Payment <span>Method</span>
      </Header>
      <Slide />
      <Content>
        <h3>TopCoinXpert</h3>
        <h2>
          Our <span>Statistics</span>
        </h2>
        <p>
          The tasks of our specialized specialists also include ensuring the
          diversification of financial resources in order to minimize risks.
        </p>
        <div className="gifWrapper">
          <img src={btcGirl} alt="" />
        </div>
      </Content>
    </Container>
  );
};

export default Third;

const Container = styled.section`
  background: url(${bg}) no-repeat;
  background-size: cover;
  padding: 30px 80px;
  height: 100vh;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;

  span {
    color: #ab3e5b;
  }
`;

const Content = styled.div`
  margin-top: 30px;
  position: relative;

  h3 {
    font-size: 25px;
    margin: 0 !important;
    color: ${process.env.REACT_APP_THIRD_COLOR};
  }

  h2 {
    margin: 0 !important;
    font-size: 45px;

    span {
      color: ${process.env.REACT_APP_SECONDARY_COLOR};
    }
  }

  p {
    width: 35%;
  }

  .gifWrapper {
    position: absolute;
    top: 20px;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;

    img {
      width: 400px;
      height: 400px;
    }
  }
`;
