import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-left: 12vw;
  background-color: #9FB79E;
  width: 100%;

  border-bottom-right-radius: 50px;
  box-shadow: 5px 10px 5px darkolivegreen;
  h1 {
    margin-top: 2%;
    font-family: "Script MT";
    font-size: 3rem;
    color: #1B5919;
    text-align: center;
    font-weight: 900;
  }
`;

export default function AppHeader() {
  return (
    <HeaderContainer>
      <h1>The Med Cabinet ®</h1>
    </HeaderContainer>
  );
};