import React from "react";
import styled from "styled-components";
import bg from "../../../assets/images/img-bg1.jpg";
import headBg from "../../../assets/images/head-bg.jpg";
import Second from "../Landing/SecondSectio/Second";
import { HowItWorks } from "../Landing/SecondSectio/Second";
import Steps from "../About/Steps";
import Third from "../Landing/ThirdSection/Third";

const Home = () => {
  return (
    <Wrapper>
      <Title>
        <h1>
          <span>A</span>bout <span>U</span>s
        </h1>
      </Title>{" "}
      <AboutSection>
        <p
          style={{
            color: "rgba(0,0,0,0.23)",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          TopCoinXpert
        </p>
        <Title>
          <h6>
            About Our <span>Company</span>
          </h6>
        </Title>
        <Body>
          <p>
            In the conditions of the modern financial market, quite strong
            positions are occupied by investment funds. The high popularity and
            attraction of large client audiences to such funds are due to the
            mutual benefit of this direction - the clients of the funds develop
            their business due to the influx of large external investments,
            investors receive a stable passive income, and the organizations
            themselves profit from constant capital turnover. The TopCoinXpert
            company is identical to investment funds by the nature of its
            activities, working in several profitable areas. Working capital is
            used not only for the purpose of concluding large transactions for
            the sale or acquisition of shares and other financial assets of
            promising companies in the field of the metaverse from all over the
            world. Investment injections are also required for the development
            of promising projects in small and medium-sized businesses, in the
            high-tech industry and in the worldwide global network. To ensure
            the growth of working capital, our company decided to use the option
            of attracting third-party investments not only from legal entities,
            but also from private investors. By establishing a connection
            between all participants in the activity through this online
            project, TopCoinXpert is able to generate impressive profits, which
            are distributed among investors proportionally in the form of
            investment dividends. A flexible policy of activity in international
            financial markets and an effective organizational structure of
            management make it possible to equalize the interests and
            opportunities of small and large clients. Before making a decision
            on the acquisition of shares in a particular company, a
            comprehensive in-depth analysis of the subject of project financing
            is carried out, the advantages and prospects for implementing the
            proposed business plan are considered, forecasts are made regarding
            the level of potential profit that can be generated in the near
            future through cooperation with a particular business entity . The
            tasks of our specialized specialists also include ensuring the
            diversification of financial resources in order to minimize risks.
            With this approach to work, each interested investor receives
            confidence in the stability and long-term active existence of our
            company in the market, and, accordingly, a guaranteed receipt of its
            own profit in a predetermined amount.
          </p>
        </Body>
        <HowItWorks>
          <h3>TopCoinXpert</h3>
          <h2>
            How It <span>Works</span>
          </h2>
          <p>
            You only need to take three simple steps. Within an hour you will
            receive your first profit. The withdrawal process takes minutes,
            payments are instant. <br /> <br /> For some cryptocurrencies, it
            may take from 3 to 6 confirmations on the network.
          </p>
          {/* <Button>Read More</Button> */}
        </HowItWorks>
        <Steps />
        {/* <Third /> */}
      </AboutSection>
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

const AboutSection = styled.div`
  background: url(${headBg}), no-repeat;
  padding: 20px 70px;
  position: relative;
  margin: 0 !important;

  p {
    margin: 0 !important;
    text-align: center;
  }
`;

const Body = styled.div`
  p {
    color: #3d3d3d;
    text-align: justify;
  }
`;
