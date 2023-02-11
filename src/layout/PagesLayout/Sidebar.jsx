import React from "react";
import styled from "styled-components";
import { AiOutlineEdit, AiOutlinePoweroff } from "react-icons/ai";

const Sidebar = () => {
  return (
    <Container>
      <FirstPart>
        <p>TopCoinXpert</p>
      </FirstPart>
      <SecondPart>
        <div className="sidebarBody">
          <div className="userName">
            <p>
              Nametheman <br /> <span>Welcome</span>
            </p>
          </div>
          <div className="userActions">
            <span>
              <AiOutlineEdit size={20} style={{ color: "#9e5f6f" }} />
            </span>
            <span>
              <AiOutlinePoweroff size={20} style={{ color: "#9e5f6f" }} />
            </span>
          </div>
          <div className="linksWrapper">
            <a href="#">Dashboard</a>
            <a href="#">Deposit</a>
            <a href="#">Withdraw</a>
            <a href="#">Security</a>
            <a href="#">Referrals</a>
            <a href="#">Banners</a>
          </div>
        </div>
      </SecondPart>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div`
  width: 200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #9a9a9a;
`;
const FirstPart = styled.div`
  height: 80px;
  p {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    opacity: 0.6;
  }
`;
const SecondPart = styled.div`
  background: #9e5f6f;
  height: 100%;

  .sidebarBody {
    .userName {
      p {
        text-align: center;
        font-weight: 600;
        span {
          color: #fff;
          opacity: 0.9;
        }
      }
    }
    .userActions {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      span {
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius 50%;
        cursor: pointer;
      }
    }
    .linksWrapper {
      display: flex;
      flex-direction: column;

      a {
        border-bottom: 1px dotted;
        text-decoration: none;
        color: #000;
        padding: 9px 0 9px 50px;
        font-weight: 600;
      }
    }
    // ul {
    //   list-style: none;
    //   // display: flex;
    //   // flex-direction: column;
    //   // gap: 20px;
    //   border: 1px solid;

    //   li a {
    //     border: 1px solid;
    //     text-decoration: none;
    //     color: #000;
    //     font-weight: 600;
    //   }
    // }
  }
`;
