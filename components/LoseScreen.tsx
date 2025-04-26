import React from "react";
import styled from "styled-components";
import Router from "next/router";
export const StyledLoseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledLoseText = styled.h2`
  font-size: 48px;
  color: #ffffff;
`;
export const StyledLoseButton = styled.button`
  width: 300px;
  height: 100px;
  border: 5px solid #fff;
  border-radius: 20px;
  padding: 30px;
  background-color: Transparent;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 34px;
  color: #fff;
  font-weight: 700;
  transition: all 0.2s ease;

  outline: none;
  :hover {
    cursor: pointer;
    color: #ec4ed7;
    border: 5px solid #ec4ed7;
  }

  :active {
    width: 250px;
    height: 90px;
    color: #d636a1;
    border: 5px solid #d636a1;
  }
`;

export function LoseScreen() {
  return (
    <StyledLoseWrapper>
      <StyledLoseText>Oops looks like you lost!</StyledLoseText>
      <StyledLoseButton onClick={() => Router.reload()}>
        Try Again
      </StyledLoseButton>
    </StyledLoseWrapper>
  );
}

export default LoseScreen;
