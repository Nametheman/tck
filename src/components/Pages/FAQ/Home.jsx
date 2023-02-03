import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../../assets/images/img-bg1.jpg";
import headBg from "../../../assets/images/head-bg.jpg";
import faqs from "./questions";
import MyFAQ from "./MyFAQ";

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <h1>
          Frequently <span>Asked Questions</span>
        </h1>
      </Title>
      <Body>
        <p>
          Do you have any questions? Please do not hesitate to contact us
          directly. <br /> Our team will come back to you within a matter of
          hours to help you.
        </p>
        <Content>
          <div className="faqWrapper">
            {faqs.map((faq) => {
              return (
                <div key={faq.id}>
                  <MyFAQ faq={faq} />
                </div>
              );
            })}
          </div>
        </Content>
      </Body>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  background: url(${bg}), no-repeat;
`;
const Title = styled.div`
  text-align: center;
  padding: 40px 0;
  margin: 0 !important;

  h1 {
    margin: 0 !important;
    font-size: 35px;

    span {
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }

  h6 {
    margin: 0 !important;
    font-size: 15px;

    span {
      : 0 !important;

      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }
`;

const Body = styled.div`
  background: url(${headBg}), no-repeat;
  padding: 20px 70px;
  position: relative;
  margin: 0 !important;

  p {
    margin: 0 !important;
    text-align: center;
  }
`;

const Content = styled.div`
  .faqWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px 40px;
    justify-content: space-between;
  }
`;
