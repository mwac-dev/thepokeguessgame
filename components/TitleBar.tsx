import React from "react";
import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledTitleBar = styled.div`
  width: 95%;
  max-width: 900px;
  min-height: 80px;
  height: auto;
  padding: 10px 0;
  background: linear-gradient(
    180.76deg,
    rgba(251, 189, 70, 0) -5.2%,
    #fbbd46 47.51%,
    #fcc63d 99.34%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 61px 61px;
  box-shadow: 0px 33px 20px -23px rgba(163, 80, 4, 0.25);

  @media (max-width: 1200px) {
    border-radius: 0 0 50px 50px;
    min-height: 70px;
  }

  @media (max-width: 768px) {
    border-radius: 0 0 40px 40px;
    padding: 12px 0;
    min-height: 60px;
  }

  @media (max-width: 480px) {
    border-radius: 0 0 30px 30px;
    padding: 10px 0;
    min-height: 50px;
  }

  @media (max-width: 380px) {
    border-radius: 0 0 25px 25px;
    padding: 8px 0;
    min-height: 45px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 64px;
  color: #fff;
  font-family: "Mochiy Pop One", sans-serif;
  text-align: center;
  margin: 0;
  padding: 0 20px;

  @media (max-width: 1200px) {
    font-size: 52px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }

  @media (max-width: 380px) {
    font-size: 22px;
    padding: 0 15px;
  }
`;

function TitleBar() {
  return (
    <>
      <StyledTitleWrapper>
        <StyledTitleBar>
          <StyledTitle>The PokéGuess Game</StyledTitle>
        </StyledTitleBar>
      </StyledTitleWrapper>
    </>
  );
}

export default TitleBar;
