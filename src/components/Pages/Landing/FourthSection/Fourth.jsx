import React from "react";
import bg from "../../../../assets/images/img-bg2.png";
import styled from "styled-components";
import { Header } from "../ThirdSection/Third";
import trust1 from "../../../../assets/images/sec-ico01.png";
import trust2 from "../../../../assets/images/sec-ico02.png";
import trust3 from "../../../../assets/images/sec-ico03.png";
import trust4 from "../../../../assets/images/sec-ico04.png";
import trust5 from "../../../../assets/images/sec-ico05.png";
import trust6 from "../../../../assets/images/sec-ico06.png";

const Fourth = () => {
  const topInestors = [
    { name: "Fripong", amount: "$137100.00" },
    { name: "Sintere", amount: "$135000.00" },
    { name: "Honwani", amount: "$126140.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
  ];
  const topReferrers = [
    { name: "Fripong", amount: "$137100.00" },
    { name: "Sintere", amount: "$135000.00" },
    { name: "Honwani", amount: "$126140.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
    { name: "Fripong", amount: "$137100.00" },
  ];

  const trustees = [
    { image: trust1 },
    { image: trust2 },
    { image: trust3 },
    { image: trust4 },
    { image: trust5 },
    { image: trust6 },
  ];
  return (
    <Container>
      <Header>
        Transaction <span>History</span>
      </Header>
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          letterSpacing: "1.2px",
        }}
      >
        After the predetermined plan period expires, you can withdraw your
        earnings <br />
        or capital with profits to your wallet. Live stats here
      </p>

      <CardContainer>
        <div>
          <div className="card">
            {topInestors.map((investor) => {
              return (
                <div>
                  <p>{investor.name}</p>
                  <p>{investor.amount}</p>
                </div>
              );
            })}
          </div>
          <p
            style={{ textAlign: "center", color: "#777574", fontWeight: "600" }}
          >
            TOP INVESTORS
          </p>
        </div>
        <div>
          <div className="card">
            {topReferrers.map((investor) => {
              return (
                <div>
                  <p>{investor.name}</p>
                  <p>{investor.amount}</p>
                </div>
              );
            })}
          </div>
          <p
            style={{ textAlign: "center", color: "#777574", fontWeight: "600" }}
          >
            TOP INVESTORS
          </p>
        </div>
      </CardContainer>
      <Trustees>
        {trustees.map((trustee) => {
          return <img src={trustee.image} />;
        })}
      </Trustees>
    </Container>
  );
};

export default Fourth;

const Container = styled.div`
  background: url(${bg}) no-repeat;
  background-size: cover;
  padding: 30px 80px;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 0 30px;
  gap: 20px;
  margin-top: 40px;

  .card {
    background: #f8e5ee;
    padding: 30px;

    div {
      width: 450px;

      background: #ab3e5b;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;

      p {
        margin: 0 !important;
        font-weight: 500;
        text-transform: ;
      }
    }
  }
`;

const Trustees = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
