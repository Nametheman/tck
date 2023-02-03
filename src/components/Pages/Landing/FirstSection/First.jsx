import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../../../assets/images/img-bg1.jpg";
import headBg from "../../../../assets/images/head-bg.jpg";
import carouselData from "./carousel";
import logo from "../../../../assets/images/logo.png";

const First = () => {
  const [plans, setPlans] = useState(carouselData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = plans.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, plans]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Container>
      <FirstDiv>
        <p className="intro-text">
          <span>TopCoinXpert</span> Invest Money
        </p>

        <h3>
          <span>E</span>xpand Your <span>E</span>arnings Bounds With
          TopCoinXpert Platform
        </h3>
        <p>
          To ensure the growth of working capital, our company decided to use
          the option of attracting third-party investments not only from legal
          entities, but also from private investors.
        </p>
        <Button>Get Started</Button>
      </FirstDiv>
      <CarouselContainer>
        {plans.map((plan, planIndex) => {
          let position = "nextSlide";
          if (planIndex === index) {
            position = "activeSlide";
          }
          if (
            planIndex === index - 1 ||
            (index === 0 && planIndex === plan.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <CarouselWrapper
              key={planIndex}
              style={{
                background: ` linear-gradient(rgba(0, 0, 0, 0.5), ${plan.background}),
    url(${headBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: `${plan.color}`,
              }}
              className={position}
            >
              <div className="carouselLogo">
                <p>TopCoinXpert</p>
              </div>
              <div className="planRoi">
                {/* <h1>ROI</h1> */}
                <h2>
                  {plan.roi}
                  <span> %</span>
                </h2>
                <p
                  style={{
                    border: `1px solid ${plan.color}`,
                    padding: "5px 20px",
                    borderRadius: "30px",
                  }}
                >
                  after <br /> {plan.duration}
                </p>
              </div>
              <div className="duration">
                <p>DURATIONS: </p>
                <h3>For {plan.duration}</h3>
              </div>
              <div className="duration">
                <p>Total Profit: </p>
                <h3>{plan.totalProfit}%</h3>
              </div>
              <div className="duration">
                <p>MIN - MAX DEPOSIT: </p>
                <h3>
                  ${plan.min} - ${plan.max}
                </h3>
              </div>
              <div className="duration">
                <p>SUPPORT: </p>
                <h3>{plan.support} support</h3>
              </div>
              <div className="duration">
                <p>Number Of Deposits: </p>
                <h3>{plan.number}</h3>
              </div>
            </CarouselWrapper>
          );
        })}
      </CarouselContainer>
    </Container>
  );
};

export default First;

export const Container = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  // height: 110vh;
  display: flex;
  padding: 0 80px;
  justify-content: space-between;
`;

const FirstDiv = styled.div`
  flex: 0.8;
  padding: 90px 0;
  .intro-text {
    color: #777574;
    font-size: 18px;
    font-weight: 500;
    margin: 0 !important;

    span {
      font-size: 21px;
      font-weight: 600;
      border-bottom: 2px dotted;
      //   border-bottom: 2px dotted;
      margin-right: 10px;
    }
  }

  h3 {
    font-size: 40px;

    span {
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }
`;

const CarouselContainer = styled.div`
  width: 500px;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const CarouselWrapper = styled.div`
  position: absolute;
  width: 68%;
  height: 100%;
  // border-radius: 10px;
  // border: 1px solid #000;
  // display: flex;
  // flex-direction: column;
  opacity: 0;
  padding: 20px 20px;
  transition: all 0.3s linear;
  background-image: url(${bg}) no-repeat;
  background-size: cover;
  // color: #211103;

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }

  .carouselLogo {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      width: 200px;
      opacity: 0.2;
      text-align: center;
      font-weight: 900;
      font-size: 10px;
      // margin: 0 auto;
      display: none;
    }
  }

  .planRoi {
    // border: 1px dotted #3f3e3e;
    //
    display: flex;
    align-items: center;
    // justify-content: center;
    margin-left: 30px;
    gap: 20px;

    p {
      text-align: center;
      margin-left: 4px;
      font-size: 17px;
      font-weight: bold;
    }

    h1 {
      margin-top: 35px;
      font-size: 30px;
      font-family: "Inter", sans-serif;
    }
    h2 {
      font-size: 45px;

      span {
        font-size: 15px;
      }
    }
  }

  .duration {
    border: 3px dotted #ab3d5a18;
    margin-bottom: 9px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-weight: bold;
      font-size: 13px;
      // color: #3f3e3e;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  background: ${process.env.REACT_APP_PRIMARY_COLOR};
  color: ${process.env.REACT_APP_THIRD_COLOR};
  border: none;
  outline: none;
  padding: 14px 45px;
  border-radius: 20px;
  cursor: pointer;
`;
