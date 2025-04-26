import React from "react";
import styled from "styled-components";

export const StyledQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  margin-top: 50px;
`;
export const StyledQuestionHeader = styled.h3`
  font-size: 48px;
  color: #fff;
  text-shadow: 1px 1px 15px #d400ff;
  margin: 0;
  margin-bottom: 5px;
`;
export const StyledQuestion = styled.h4`
  font-size: 48px;
  color: #fff;
  margin: 0;
  text-shadow: 1px 1px 15px #d400ff;
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
