import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../../../assets/images/Authentication.gif";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/reducers/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let payload = { email, password };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (email?.length > 1 && password?.length > 1) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.authenticateUser(payload));
    navigate("/dashboard");
  };
  return (
    <Container>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <span>
            <div className="inputWrapper">
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                className="input"
                // ref={emailRef}
                onChange={emailHandler}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="password">Your Password </label>
              {/* {error2 && error2 && <small>{errorMessage}</small>} */}
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                className="input"
                // ref={passwordRef}
                onChange={passwordHandler}
              />
            </div>
          </span>
          <div className="button">
            <button disabled={submitDisabled ? true : false}>Login</button>
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
  //   background: url(${bg});
  //   background-repeat: no-repeat;
  //   background-position: center;

  display: flex;
  //   height: 100vh;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid;
  img {
    // visibility: hidden;
    width: 45%;
    // height: 800px;
  }
`;
const FormContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  flex: 1;
  
  
  
  form {
      padding: 40px 20px;
     border-radius: 5px;
         box-shadow: 0px 0px 51px -2px rgba(0,0,0,0.39);
-webkit-box-shadow: 0px -1px 51px -2px rgba(0,0,0,0.39);
-moz-box-shadow: 0px 0px 51px -2px rgba(0,0,0,0.39);


    span {
      display: flex;
      gap: 18px;
      flex-direction: column;


      
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
          width: 300px;
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
