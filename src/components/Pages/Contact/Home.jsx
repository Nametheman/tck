import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../../assets/images/img-bg1.jpg";
import contactUs from "../../../assets/images/contact.svg";

const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Container>
      <FormContainer>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" value={username} name="username" id="username" />
          </div>
          <div>
            <label htmlFor="email">Username</label>
            <input type="email" value={email} name="email" id="email" />
          </div>
        </form>
      </FormContainer>
      <img src={contactUs} alt="" />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  padding: 60px 80px;
  background: url(${bg}), no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 45%;
  }
`;
const FormContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  flex: 1;
`;
