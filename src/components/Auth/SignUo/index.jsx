import React from "react";
import { Routes, Route } from "react-router-dom";
import { PagesLayout } from "../../../layout";
import styled from "styled-components";
import Home from "./Home";

const Index = () => {
  return (
    <PagesLayout
      children={
        <Container>
          <Home />
        </Container>
      }
    />
  );
};

export default Index;
const Container = styled.div``;
