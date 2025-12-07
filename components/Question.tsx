import React from "react";
import styled from "styled-components";

export const StyledQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0;
  margin-top: 50px;

  @media (max-width: 1200px) {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;
export const StyledQuestionHeader = styled.h3`
  font-size: 48px;
  color: #fff;
  text-shadow: 1px 1px 15px #d400ff;
  margin: 0;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
export const StyledQuestion = styled.h4`
  font-size: 48px;
  color: #fff;
  margin: 0;
  text-shadow: 1px 1px 15px #d400ff;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

type Props = {
  GeneratedQuestion: string;
};

function Question({ GeneratedQuestion }: Props) {
  return (
    <StyledQuestionWrapper>
      <StyledQuestionHeader>Which Pokemon</StyledQuestionHeader>
      <StyledQuestion>{GeneratedQuestion}</StyledQuestion>
    </StyledQuestionWrapper>
  );
}

export default Question;
