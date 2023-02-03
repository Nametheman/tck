import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/img-bg1.jpg";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaPinterest,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FirstSection>
          <h3>TopCoinXpert</h3>{" "}
          <p>
            To ensure the growth of working capital, our company decided to use
            the option of attracting third-party investments
          </p>
          <SocalsWrapper>
            <FaFacebookF />
            <FaPinterest />
            <FaTelegramPlane />
            <FaTwitter />
          </SocalsWrapper>
        </FirstSection>
        <SecondSection>
          <h3>Visit Links</h3>
          <a href="#">Latest News</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">FAQ</a>
        </SecondSection>
        <ThirdSection>
          <h3>Quick Links</h3>
          <a href="#">About Us</a>
          <a href="#">Member Stats</a>
          <a href="#">Paidout History</a>
          <a href="#">Banners</a>
        </ThirdSection>
        <FourthSection>
          <h3>Contact</h3>
          <p>Tel - For VIP members</p>
          <p>admin@meta-hours.club</p>
          <p>support@meta-hours.club</p>
        </FourthSection>
        <FifthSection>
          <h3>Address</h3>
          <p>Hong Kong, Hung Hom, Whampoa Garden Site 3 Block 3, 地下15號舖</p>
        </FifthSection>
      </FooterWrapper>
      <NoteSection>
        <p>
          <strong>NOTE</strong> : We do not recommend that you spend what you
          cannot afford to lose. You must be aware of any investment risk. We
          cannot be held responsible for your choices or actions.
        </p>
      </NoteSection>
      <div style={{ textAlign: "center", color: "#777574", fontWeight: "500" }}>
        Copyright @ 2022 TopCoinXpert All Rights Reserved.
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.section`
  background: url(${bg}) no-repeat;
  background-size: cover;
  padding: 20px 60px;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 20px;
  p {
    color: #777574;
  }
  a {
    color: #777574;
    font-weight: 500;
  }
`;

const FirstSection = styled.div`
  flex: 0.8;
`;

const SocalsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 23px;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      color: #499380;
    }
  }
`;

const SecondSection = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  a {
    margin-bottom: 10px;
  }
`;
const ThirdSection = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  a {
    margin-bottom: 10px;
  }
`;
const FourthSection = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  p {
    margin: 0 !important;
    margin-bottom: 10px !important;
    font-weight: 600;
  }
`;

const FifthSection = styled.div`
  flex: 0.5;
`;

const NoteSection = styled.div`
  margin: 20px 0;
  border-top: 2.5px dotted #777574;
  border-bottom: 2.5px dotted #777574;

  p {
    color: #777574;

    strong {
      color: #000;
    }
  }
`;
