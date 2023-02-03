import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const MyFAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showAnswerHandler = () => {
    setShowAnswer(!showAnswer);

    // if (showAnswer) {
    //   setIsOpen(!showAnswer);
    // }
  };
  return (
    <>
      <FAQ key={faq.id} className="faq">
        <div
          className="faq-question"
          onClick={showAnswerHandler}
          style={{ background: `${showAnswer ? "#211103" : "#ab3e5b"}` }}
        >
          <h5>{faq.title}</h5>
          {showAnswer ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
        <p
          style={{
            textAlign: "left",
            display: `${showAnswer ? "block" : "none"}`,
            transition: "1s ease-in",
          }}
        >
          {faq.answer}
        </p>
      </FAQ>
    </>
  );
};

export default MyFAQ;
const FAQ = styled.div`
  width: 570px;

  p {
    font-size: 16px;
    text-align: left;
    padding: 18px 15px;
    border-radius: 10px;
    background: #fff;
    transition: 0.3s ease-in;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    border-radius: 10px;
    color: #fff;
    border: 1px solid;
    padding: 0 10px;
    cursor: pointer;
    transition: 0.3s ease-in;

    h5 {
      font-size: 15px;
    }
  }
`;
