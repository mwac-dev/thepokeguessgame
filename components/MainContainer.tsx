import React from "react";
import PokeContainer from "./PokeContainer";

import styled from "styled-components";

export const StyledContainerWrapper = styled.div`
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
export const StyledContainer = styled.div`
  display: flex;
  margin-top: 80px;
  box-shadow: 0px 38px 23px -19px rgba(150, 58, 19, 0.21);
  border-radius: 67px;
  border: double 37px transparent;
  background-image: linear-gradient(180deg, #c91ff3 0%, #e4758f 100%),
    linear-gradient(to bottom, rgba(255, 239, 98, 1), rgba(255, 218, 21, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 100%;
  width: 60%;
  min-width: min-content;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 85%;
    border-width: 25px;
    margin-top: 60px;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    width: 95%;
    border-width: 15px;
    margin-top: 30px;
    border-radius: 35px;
  }

  @media (max-width: 480px) {
    width: 95%;
    border-width: 10px;
    margin-top: 20px;
    border-radius: 30px;
  }
`;

export const StyledContainerImage = styled.div`
  display: flex;
  background-image: url("containerimage.png");
  border-radius: 67px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 20px;
    background-size: cover;
    background-position: center;
  }
`;

type Props = {
  pokemonImageRight: string;
  pokemonImageLeft: string;
  selectedPokemon: any;
  pokemonRName: string;
  pokemonLName: string;
  winLose: any;
  randImgKey: any;
  didLose: any;
  score: number;
};

function MainContainer({
  pokemonImageRight,
  pokemonImageLeft,
  selectedPokemon,
  pokemonRName,
  pokemonLName,
  winLose,
  randImgKey,
  didLose,
  score,
}: Props) {
  return (
    <StyledContainerWrapper>
      <StyledContainer>
        <StyledContainerImage>
          <PokeContainer
            pokemonImageRight={pokemonImageRight}
            pokemonImageLeft={pokemonImageLeft}
            selectedPokemon={selectedPokemon}
            pokemonLName={pokemonLName}
            pokemonRName={pokemonRName}
            winLose={winLose}
            randImgKey={randImgKey}
            didLose={didLose}
            score={score}
          />
        </StyledContainerImage>
      </StyledContainer>
    </StyledContainerWrapper>
  );
}

export default MainContainer;
