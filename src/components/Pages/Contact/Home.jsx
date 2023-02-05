import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../../../assets/images/img-bg1.jpg";
import contactUs from "../../../assets/images/contact.svg";

const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const usernameEnterHandler = (e) => [setUsername(e.target.value)];
  const emailEnterHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageEnterHandler = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (email.length < 3 || username.length < 3 || message.length < 2) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [username, email, message]);

  const payload = { username, email, message };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(payload);
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              name="username"
              id="username"
              className="input"
              onChange={usernameEnterHandler}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              className="input"
              onChange={emailEnterHandler}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="52"
              rows="15"
              style={{ resize: "none" }}
              className="input"
              value={message}
              onChange={messageEnterHandler}
            ></textarea>
          </div>
          <div className="button">
            <button disabled={submitDisabled ? true : false}>
              Send Message
            </button>
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
  // border: 1px solid;

  img {
    width: 45%;
    height: 100%;
  }
`;
const FormContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  flex: 1;

  form {
    .button {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      button {
        padding: 10px 30px;
        border: none;
        outline: none;
        background: #ab3e5b;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: 0.3s ease-in;

        &:disabled {
          color: grey;
          background: #3d3d3d;
          cursor: not-allowed;
        }
      }
    }
    .inputWrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
      input {
        height: 35px;
      }
      .input {
        border: none;
        outline: none;
        margin-bottom: 10px;
        padding: 5px;
        width: 400px;
        border: 1px solid #ab3e5b;
        transition: 0.3s ease-in-out;
        border-radius: 5px;

        &:focus {
          box-shadow: 0 0 10px #c13c60;
        }
      }
    }
  }
`;
