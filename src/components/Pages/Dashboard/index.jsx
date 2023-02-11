import React from "react";
import { PagesLayout } from "../../../layout";
import styled from "styled-components";
import Home from "./Home";

const Index = () => {
  return (
    <PagesLayout
      dashboard={
        <Container>
          <Home />
        </Container>
      }
    />
  );
};

export default Index;
const Container = styled.div``;
