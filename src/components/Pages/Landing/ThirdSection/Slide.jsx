import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pay1 from "../../../../assets/images/pay-ico01.png";
import pay2 from "../../../../assets/images/pay-ico02.png";
import pay3 from "../../../../assets/images/pay-ico03.png";
import pay4 from "../../../../assets/images/pay-ico04.png";
import pay5 from "../../../../assets/images/pay-ico05.png";
import pay6 from "../../../../assets/images/pay-ico06.png";
import pay7 from "../../../../assets/images/pay-ico07.png";

const Slide = () => {
  const slideImages = [
    { image: pay1, id: "ico1" },
    { image: pay2, id: "ico2" },
    { image: pay3, id: "ico3" },
    { image: pay4, id: "ico4" },
    { image: pay5, id: "ico5" },
    { image: pay6, id: "ico6" },
    { image: pay7, id: "ico7" },
  ];

  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const lastIndex = slideImages.length - 1;
  //     if (index < 0) {
  //       setIndex(lastIndex);
  //     }
  //     if (index > lastIndex) {
  //       setIndex(0);
  //     }
  //   }, [index, slideImages]);

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1);
  //     }, 5000);
  //     return () => {
  //       clearInterval(slider);
  //     };
  //   }, [index]);

  return (
    <Wrapper>
      {slideImages.map((image, imageIndex) => {
        // let position = "nextSlide";
        // if (imageIndex === index) {
        //   position = "activeSlide";
        // }
        // if (
        //   imageIndex === index - 1 ||
        //   (index === 0 && imageIndex === slideImages.length - 1)
        // ) {
        //   position = "lastSlide";
        // }
        return (
          <Myslides key={image.id}>
            <img src={image.image} alt="" />
          </Myslides>
        );
      })}
    </Wrapper>
  );
};

export default Slide;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  //   position: relative;
`;

const Myslides = styled.div`
  transition: all 0.3s linear;

  img {
    // width: 120px;
    margin-right: 30px;
  }

  //   &.activeSlide {
  //     // opacity: 1;
  //     transform: translateX(0);
  //   }

  //   &.lastSlide {
  //     transform: translateX(-140px);
  //   }

  //   &.nextSlide {
  //     transform: translateX(140px);
  //   }
`;
