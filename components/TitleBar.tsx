import React from "react";
import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitleBar = styled.div`
  width: 900px;
  height: 140px;
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
  box-shadow: 0px 33px 20px -23px rgba(163, 80, 4, 0.25); ;
`;

export const StyledTitle = styled.h1`
  font-size: 64px;
  color: #fff;
  font-family: "Mochiy Pop One", sans-serif;
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
