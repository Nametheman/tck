import React from "react";
import styled from "styled-components";
import bg from "../../../../assets/images/img-bg2.png";
import { Button } from "../FirstSection/First";
import investPic from "../../../../assets/images/Investment.png";
import Steps from "./Steps";

const Second = () => {
  return (
    <Container>
      <FirstSection>
        <h3>TopCoinXpert</h3>
        <h2>
          About Our <span>Company</span>
        </h2>
        <p>
          The TopCoinXpert company is identical to investment funds by the
          nature of its activities, working in several profitable areas. Working
          capital is used not only for the purpose of concluding large
          transactions for the sale or acquisition of shares and other financial
          assets of promising companies in the field of the metaverse from all
          over the world. Investment injections are also required for the
          development of promising projects in small and medium-sized
          businesses, in the high-tech industry and in the worldwide global
          network.
        </p>
        <Button>Get Started</Button>
      </FirstSection>
      <HowItWorks>
        <h3>TopCoinXpert</h3>
        <h2>
          How It <span>Works</span>
        </h2>
        <p>
          You only need to take three simple steps. Within an hour you will
          receive your first profit. The withdrawal process takes minutes,
          payments are instant. <br /> <br /> For some cryptocurrencies, it may
          take from 3 to 6 confirmations on the network.
        </p>
        <Button>Read More</Button>
      </HowItWorks>
      <SecondSection>
        <img src={investPic} alt="" />
      </SecondSection>
      <ThirdSection>
        <TSContents>
          <h2>
            Referral <span>Commission</span>
          </h2>
          <p>
            Are you a promoter? Do you have a large base of investors? Prove
            your worth and get up to 30% commission!
          </p>
          <div className="figures">
            <div>
              <h2>0.10%</h2>
              <p>For $20 - $999</p>
            </div>
            <div>
              <h2>5.00%</h2>
              <p>For $1000 - $2999</p>
            </div>
            <div>
              <h2>10.00%</h2>
              <p>For $3000 - $7999</p>
            </div>
            <div>
              <h2>15.00%</h2>
              <p>For $8000 - $100000</p>
            </div>
          </div>
        </TSContents>
      </ThirdSection>
      <Steps />
    </Container>
  );
};

export default Second;

const Container = styled.section`
  position: relative;
  background: url(${bg}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 30px 80px;
`;
const FirstSection = styled.div`
  //   flex: 0.35;
  width: 40%;
  padding: 0 20px;

  h2 {
    font-size: 30px;

    span {
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }

  p {
    text-align: justify;
  }
`;
export const HowItWorks = styled.div`
  background: ${process.env.REACT_APP_THIRD_COLOR};
  //   flex: 0.35;
  padding: 20px;
  width: 40%;
  margin-top: 60px;

  h2 {
    font-size: 30px;

    span {
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }

  p {
    width: 70%;
    text-align: justify;
  }
`;

const SecondSection = styled.div`
  position: absolute;
  top: -100px;
  right: 10%;
  img {
    width: 600px;
  }
`;

const ThirdSection = styled.div`
  display: flex;
  // justify-content: flex-end;
  margin-top: 20px;
`;

const TSContents = styled.div`
  p {
    width: 40%;
    margin: 0 !important;
  }
  h2 {
    margin: 0 !important;
  }

  .figures {
    margin-top: 20px;
    display: grid;
    // justify-content: center;
    grid-template-columns: 1fr 1fr;

    div {
      margin-bottom: 20px;

      h2 {
        margin-bottom: 10px;
      }
    }
  }
`;
