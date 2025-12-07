import React from "react";
import styled, { keyframes } from "styled-components";
import Router from "next/router";

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(236, 78, 215, 0.4), 0 0 40px rgba(236, 78, 215, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(236, 78, 215, 0.6), 0 0 60px rgba(236, 78, 215, 0.3);
  }
`;

export const StyledLoseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 15px;
    padding-bottom: 30px;
  }

  @media (max-width: 380px) {
    gap: 12px;
    margin-top: 12px;
    padding-bottom: 25px;
  }
`;

export const StyledLoseText = styled.h2`
  font-size: 48px;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

  @media (max-width: 380px) {
    font-size: 20px;
  }
`;

export const StyledLoseButton = styled.button`
  position: relative;
  width: 280px;
  height: 80px;
  border: none;
  border-radius: 40px;
  padding: 20px 40px;
  background: linear-gradient(135deg, #ec4ed7 0%, #ff6b9d 50%, #ffd344 100%);
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 28px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.3s ease;
  box-shadow: 0 8px 25px rgba(236, 78, 215, 0.4),
              0 4px 10px rgba(0, 0, 0, 0.2),
              inset 0 -3px 0 rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 35px rgba(236, 78, 215, 0.5),
                0 6px 15px rgba(0, 0, 0, 0.25),
                inset 0 -3px 0 rgba(0, 0, 0, 0.1);
    animation: ${pulse} 1.5s ease-in-out infinite;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: 0 4px 15px rgba(236, 78, 215, 0.4),
                0 2px 5px rgba(0, 0, 0, 0.2),
                inset 0 3px 5px rgba(0, 0, 0, 0.15);
    animation: none;
  }

  @media (max-width: 1200px) {
    width: 260px;
    height: 75px;
    font-size: 26px;
    padding: 18px 35px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 65px;
    font-size: 20px;
    padding: 15px 30px;
    letter-spacing: 1px;
    border-radius: 32px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 55px;
    font-size: 16px;
    padding: 12px 25px;
    border-radius: 28px;
  }

  @media (max-width: 380px) {
    width: 150px;
    height: 48px;
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 24px;
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
