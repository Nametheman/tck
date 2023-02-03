import React from "react";
import bg from "../../../assets/images/img-bg1.jpg";
import headBg from "../../../assets/images/head-bg.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <h1>Rules</h1>
      </Title>
      <Body>
        <TC>
          <h1>
            Terms <span>and Conditions</span>
          </h1>
        </TC>
        <p>
          Please read the following rules carefully before signing in. <br />{" "}
          <br />
          You agree to be of legal age in your country to partake in this
          program, and in all the cases your minimal age must be 18 years.{" "}
          <br /> <br />
          TopCoinXpert is not available to the general public and is opened only
          to the qualified members of TopCoinXpert, the use of this site is
          restricted to our members and to individuals personally invited by
          them. Every deposit is considered to be a private transaction between
          the TopCoinXpert and its Member. <br />
          <br /> As a private transaction, this program is exempt from the US
          Securities Act of 1933, the US Securities Exchange Act of 1934 and the
          US Investment Company Act of 1940 and all other rules, regulations and
          amendments thereof. We are not FDIC insured. We are not a licensed
          bank or a security firm. <br /> <br /> You agree that all information,
          communications, materials coming from TopCoinXpert are unsolicited and
          must be kept private, confidential and protected from any disclosure.
          Moreover, the information, communications and materials contained
          herein are not to be regarded as an offer, nor a solicitation for
          investments in any jurisdiction which deems non-public offers or
          solicitations unlawful, nor to any person to whom it will be unlawful
          to make such offer or solicitation. <br /> <br /> All the data giving
          by a member to TopCoinXpert will be only privately used and not
          disclosed to any third parties. TopCoinXpert is not responsible or
          liable for any loss of data. <br />
          <br /> You agree to hold all principals and members harmless of any
          liability. You are investing at your own risk and you agree that a
          past performance is not an explicit guarantee for the same future
          performance. You agree that all information, communications and
          materials you will find on this site are intended to be regarded as an
          informational and educational matter and not an investment advice. We
          reserve the right to change the rules, commissions and rates of the
          program at any time and at our sole discretion without notice,
          especially in order to respect the integrity and security of the
          members' interests. You agree that it is your sole responsibility to
          review the current terms. <br />
          <br /> TopCoinXpert is not responsible or liable for any damages,
          losses and costs resulting from any violation of the conditions and
          terms and/or use of our website by a member. You guarantee to
          TopCoinXpert that you will not use this site in any illegal way and
          you agree to respect your local, national and international laws.{" "}
          <br />
          <br /> Don't post bad vote on Public Forums and at Gold Rating Site
          without contacting the administrator of our program FIRST. Maybe there
          was a technical problem with your transaction, so please always CLEAR
          the thing with the administrator. <br /> <br />
          We will not tolerate SPAM or any type of UCE in this program. <br />{" "}
          <br /> SPAM violators will be immediately and permanently removed from
          the program. TopCoinXpert reserves the right to accept or decline any
          member for membership without explanation. <br />
          <br /> If you do not agree with the above disclaimer, please do not go
          any further.
        </p>
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
  // padding: 20px 0;
  margin: 0 !important;
  padding: 30px 80px;

  h1 {
    margin: 0 !important;
    font-size: 45px;
  }
`;

const Body = styled.div`
  padding: 30px 80px;
  background: url(${headBg}), no-repeat;

  p {
    font-weight: 600;
  }
`;
const TC = styled.div`
  text-align: center;

  h1 {
    padding: 20px 0;
    margin: 0 !important;
    font-size: 35px;

    span {
      color: ${process.env.REACT_APP_PRIMARY_COLOR};
    }
  }
`;
