import React from "react";
import styled from "styled-components";
import ico1 from "../../../assets/icons/ico01.png";
import ico2 from "../../../assets/icons/ico02.png";
import ico3 from "../../../assets/icons/ico03.png";

const Steps = () => {
  return (
    <Container>
      <Wrapper1>
        <CardOne>
          <div className="icon">
            <img src={ico1} alt="" />
          </div>
          <h4>Register Account</h4>
          <p>
            Provide your Full Name, valid e-mail address, <br /> create a
            username (login) and a strong password.
          </p>
          <p className="number">01</p>
        </CardOne>
      </Wrapper1>
      <Wrapper2>
        <CardTwo>
          <div className="icon">
            <img src={ico2} alt="" />
          </div>
          <h4>Make a Deposit</h4>
          <p>
            Choose an investment plan, enter your investment amount and make a
            deposit with the payment method that suits you best.
          </p>
          <p className="number">02</p>
        </CardTwo>
      </Wrapper2>
      <Wrapper3>
        <CardThree>
          <div className="icon">
            <img src={ico3} alt="" />
          </div>
          <h4>Withdraw Funds</h4>
          <p>
            If your amount allows you to withdraw funds, you can request them at
            any time. Payouts are instant.
          </p>
          <p className="number">03</p>
        </CardThree>
      </Wrapper3>
    </Container>
  );
};

export default Steps;

const Wrapper1 = styled.div`
  //   position: absolute;
  //   bottom: 8%;
  //   right: 44%;
`;
const Wrapper2 = styled.div`
  //   position: absolute;
  //   bottom: 18%;
  //   right: 27%;
`;
const Wrapper3 = styled.div`
  //   position: absolute;
  //   bottom: 45%;
  //   right: 1%;
`;

const Container = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 30px;
  right: 10px;
`;
const CardOne = styled.div`
  position: relative;
  width: 200px;
  height: 280px;
  background: #f8e5ee;
  padding: 20px 20px 0 20px;
  border: 3px solid #211103;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #211103;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ab3e5b;

    img {
      width: 25px;
    }
  }
  .number {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #211103;
    padding: 10px;
    margin: 0 !important;
    color: #fff;
  }
`;
const CardTwo = styled.div`
  position: relative;
  width: 200px;
  height: 280px;
  background: #f8e5ee;
  padding: 20px 20px 0 20px;
  border: 3px solid #211103;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #211103;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ab3e5b;

    img {
      width: 25px;
    }
  }
  .number {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #211103;
    padding: 10px;
    margin: 0 !important;
    color: #fff;
  }
`;
const CardThree = styled.div`
  position: relative;
  width: 200px;
  height: 280px;
  background: #f8e5ee;
  padding: 20px 20px 0 20px;
  border: 3px solid #211103;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #211103;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ab3e5b;

    img {
      width: 25px;
    }
  }
  .number {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #211103;
    padding: 10px;
    margin: 0 !important;
    color: #fff;
  }
`;
