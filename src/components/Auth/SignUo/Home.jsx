import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../../assets/images/Authentication.gif";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [epay, setEpay] = useState("");
  const [bitcoin, setBitcoin] = useState("");
  const [litecoin, setLitecoin] = useState("");
  const [dogecoin, setDogecoin] = useState("");
  const [ethereum, setEthereum] = useState("");
  const [dash, setDash] = useState("");
  const [tetherErc20, setTetherErc20] = useState("");
  const [tetherTrc20, setTetherTrc20] = useState("");
  const [tetherBep20, setTetherBep20] = useState("");
  const [tron, setTron] = useState("");
  const [bnb, setBnb] = useState("");
  const [stellar, setStellar] = useState("");
  const [secretQuestion, setSecretQuestion] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  };
  const usernameEnterHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.info(password);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    console.info(confirmPassword);
    if (confirmPassword !== password) {
      setError(true);
      setErrorMessage("Passwords unmatch");
    }
    if (confirmPassword === password) {
      setError(false);
      setErrorMessage("");
    }
  };

  const emailEnterHandler = (e) => {
    setEmail(e.target.value);
  };
  const confirmEmailHandler = (e) => {
    setConfirmEmail(e.target.value);
  };

  const yourEpayHandler = (e) => {
    setEpay(e.target.value);
  };
  const yourBitcoinHandler = (e) => {
    setBitcoin(e.target.value);
  };
  const yourLitecoinHandler = (e) => {
    setLitecoin(e.target.value);
  };
  const yourDogecoinHandler = (e) => {
    setDogecoin(e.target.value);
  };
  const yourEthereumHandler = (e) => {
    setEthereum(e.target.value);
  };
  const yourDashHandler = (e) => {
    setDash(e.target.value);
  };
  const yourTetherErcHandler = (e) => {
    setTetherErc20(e.target.value);
  };
  const yourTetherTrcHandler = (e) => {
    setTetherTrc20(e.target.value);
  };
  const yourBep20Handler = (e) => {
    setTetherBep20(e.target.value);
  };
  const yourTronHandler = (e) => {
    setTron(e.target.value);
  };
  const yourBnbHandler = (e) => {
    setBnb(e.target.value);
  };
  const yourStellarHandler = (e) => {
    setStellar(e.target.value);
  };
  const yourSecretQuestionHandler = (e) => {
    setSecretQuestion(e.target.value);
  };
  const yourSecretAnswerHandler = (e) => {
    setSecretAnswer(e.target.value);
  };

  useEffect(() => {
    if (email.length < 3 || username.length < 3 || message.length < 2) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [username, email, message]);

  useEffect(() => {
    const passwordHandler = (e) => {
      setPassword(e.target.value);
      console.log(password);
    };
    const confirmPasswordHandler = (e) => {
      setConfirmPassword(e.target.value);
      console.log(confirmPassword);
      if (confirmPassword !== password) {
        setError(true);
        setErrorMessage("Passwords unmatch");
      }
      if (confirmPassword === password) {
        setError(false);
        setErrorMessage("");
      }
    };
  }, [password]);

  const payload = { username, email, message };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(payload);
  };
  return (
    <Container>
      <FormContainer>
        {" "}
        <form onSubmit={submitHandler}>
          <span>
            <div className="inputWrapper">
              <label htmlFor="fullname">Your Full Name</label>
              <input
                type="text"
                value={fullName}
                name="fullname"
                id="fullname"
                className="input"
                onChange={fullNameHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="username">Your Username</label>
              <input
                type="text"
                value={username}
                name="username"
                id="username"
                className="input"
                onChange={usernameEnterHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                className="input"
                // onFocus={passwordHandler}
                // onChange={passwordHandler}
                onInput={passwordHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">Confirm Password</label>
              {error && error && <small>{errorMessage}</small>}
              <input
                type="password"
                value={confirmPassword}
                name="password"
                id="password"
                className="input"
                onFocus={confirmPasswordHandler}
                onChange={confirmPasswordHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="email">Your email address</label>
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
              <label htmlFor="email">Retype your email</label>
              <input
                type="email"
                value={confirmEmail}
                name="email"
                id="email"
                className="input"
                onChange={confirmEmailHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="ePayCore">Your ePayCore Account</label>
              <input
                type="text"
                value={epay}
                name="ePayCore"
                id="ePayCore"
                className="input"
                onChange={yourEpayHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="bitcoin">Your Bitcoin Account</label>
              <input
                type="text"
                value={bitcoin}
                name="bitcoin"
                id="bitcoin"
                className="input"
                onChange={yourBitcoinHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="litecoin">Your Litecoin Account</label>
              <input
                type="text"
                value={litecoin}
                name="litecoin"
                id="litecoin"
                className="input"
                onChange={yourLitecoinHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="dogecoin">Your Dogecoin Account</label>
              <input
                type="text"
                value={dogecoin}
                name="dogecoin"
                id="dogecoin"
                className="input"
                onChange={yourDogecoinHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="ethereum">Your Ethereum Account</label>
              <input
                type="text"
                value={ethereum}
                name="ethereum"
                id="ethereum"
                className="input"
                onChange={yourEthereumHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="dash">Your Dash Account</label>
              <input
                type="text"
                value={dash}
                name="dash"
                id="dash"
                className="input"
                onChange={yourDashHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="tetherErc20">Your Tether ERC-20 Account</label>
              <input
                type="text"
                value={tetherErc20}
                name="tetherErc20"
                id="tetherErc20"
                className="input"
                onChange={yourTetherErcHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="tetherTrc20">Your Tether TRC-20 Account</label>
              <input
                type="text"
                value={tetherTrc20}
                name="tetherTrc20"
                id="tetherTrc20"
                className="input"
                onChange={yourTetherTrcHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="tetherBep20">Your Tether BEP-20 Account</label>
              <input
                type="text"
                value={tetherBep20}
                name="tetherBep20"
                id="tetherBep20"
                className="input"
                onChange={yourBep20Handler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="tron">Your Tron Account</label>
              <input
                type="text"
                value={tron}
                name="tron"
                id="tron"
                className="input"
                onChange={yourTronHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="bnb">Your BNB Account</label>
              <input
                type="text"
                value={bnb}
                name="bnb"
                id="bnb"
                className="input"
                onChange={yourBnbHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="stellar">Your Stellar Account</label>
              <input
                type="text"
                value={stellar}
                name="stellar"
                id="stellar"
                className="input"
                onChange={yourStellarHandler}
              />
            </div>
          </span>
          <span>
            <div className="inputWrapper">
              <label htmlFor="secretQuestion">Your Secret Question</label>
              <input
                type="text"
                value={secretQuestion}
                name="secretQuestion"
                id="secretQuestion"
                className="input"
                onChange={yourSecretQuestionHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="secretAnswer">Your Secret Answer</label>
              <input
                type="text"
                value={secretAnswer}
                name="secretAnswer"
                id="secretAnswer"
                className="input"
                onChange={yourSecretAnswerHandler}
              />
            </div>
          </span>

          <div className="button">
            <button disabled={submitDisabled ? true : false}>
              Send Message
            </button>
          </div>
        </form>
      </FormContainer>
      <img src={bg} alt="" />
    </Container>
  );
};

export default Home;
const Container = styled.section`
  padding: 60px 80px;
  display: flex;
  //   height: 100vh;
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
    span {
      display: flex;
      gap: 18px;

      .inputWrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;

        small{
            color: red;
        }
        input {
          height: 35px;
        }
        .input {
          border: none;
          outline: none;
          margin-bottom: 10px;
          padding: 5px;
          width: 230px;
          height: 30px;
          border: 1px solid #ab3e5b;
          transition: 0.3s ease-in-out;
          border-radius: 5px;

          &:focus {
            box-shadow: 0 0 10px #c13c60;
          }
        }
      }
    }
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
    }
  }
`;
