import React from "react";
import styled from "styled-components";
import headBg from "../../assets/images/head-bg.jpg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BiUserPlus, BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/home", id: "1" },
    { name: "About Us", path: "/about", id: "2" },
    { name: "Rules", path: "/rules", id: "3" },
    { name: "FAQ", path: "/faq", id: "4" },
    { name: "Contact", path: "/contact", id: "5" },
    { name: "Sign Up", path: "/register", id: "6", icon: <BiUserPlus /> },
    { name: "Login", path: "/login", id: "7", icon: <BiLogInCircle /> },
  ];

  return (
    <Container>
      <LinksContainer>
        <a href="#">TopCoinXpert</a>
        <>
          <Links>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.path}>
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              );
              <img src={link.icon} alt="" />;
            })}
          </Links>
        </>
      </LinksContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.header`
  height: 80px;
  max-height: 80px;
  background: url(${headBg}) no-repeat;
  background-size: cover;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;
const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 100px;
  gap: 50px;

  a {
    text-decoration: none;
    color: #676666;
    font-weight: 900;
  }

  img {
    margin-right: 60px;
  }
`;
const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  //   height: 80px;

  li > a {
    text-decoration: none;
    color: #000;
    height: 80px;
    width: 120px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    // padding: 30px 40px;
    font-weight: 500;
    // font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
