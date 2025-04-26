import { clear } from "console";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { setTimeout } from "timers";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const StyledPokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  z-index: 5;
  background-color: #fff;
  border-radius: 28px;
  margin: 20px;
  transition: all 0.5s ease;
  border: 10px solid #ffd344;
  &.didLose {
    background-color: #ff5362;
    border: 10px solid #fff;
  }
`;

export const StyledPokeball = styled.img`
  display: flex;
`;
export const StyledPokemonImage = styled.img`
  padding: 30px;
  height: 120%;
  width: 120%;

  image-rendering: optimizeSpeed; /* STOP SMOOTHING, GIVE ME SPEED  */
  image-rendering: -moz-crisp-edges; /* Firefox                        */
  image-rendering: -o-crisp-edges; /* Opera                          */
  image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
  image-rendering: pixelated; /* Chrome */
  image-rendering: optimize-contrast; /* CSS3 Proposed                  */
  -ms-interpolation-mode: nearest-neighbor; /* IE8+                           */
  transition: all 0.3s ease-out;
  :hover {
    cursor: pointer;

    width: 140%;
    height: 140%;
  }

  :active {
    width: 120%;
    height: 120%;
  }
  animation-timing-function: cubic-bezier(1, 1, 1, 0.75);

  &.load-anim {
    animation: loadin 2s;
  }

  @keyframes loadin {
    0% {
      width: 0%;
      height: 50%;
    }
    85% {
      width: 140%;
      height: 140%;
    }
    90% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 120%;
      height: 120%;
    }
  }
`;
export const StyledScore = styled.h1`
  display: flex;
  color: #fff;
  font-weight: 200;
  font-size: 32px;
`;
export const StyledTimer = styled.h1`
  display: flex;
  color: #fff;
  font-weight: 200;
  font-size: 32px;
`;
export const StyledMiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

let loadAnim = "load-anim ";

function PokeContainer({
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
  const [timer, setTimer] = useState(10);
  const [restartTimer, setRestartTimer] = useState(false);

  const hideImg = () => {
    if (pokemonImageRight == undefined || pokemonImageLeft == undefined) {
      loadAnim = "";
      return true;
    } else {
      loadAnim = "load-anim ";
      return false;
    }
  };

  const loseState = () => {
    if (didLose === true) {
      return " didLose";
    } else {
      return "";
    }
  };

  function reviewAnswer(pokemon: string) {
    if (pokemon !== selectedPokemon.name) {
      winLose("lose");
    } else {
      winLose("win");
      setRestartTimer(true);
    }
  }

  const decrementTimer = () => {
    return setTimer(timer - 1);
  };

  useEffect(() => {
    const countdown = setInterval(decrementTimer, 1000);
    if (restartTimer) {
      clearInterval(countdown);
      setTimer(10);
      setRestartTimer(false);
    }
    if (timer <= 0 || didLose) {
      clearInterval(countdown);
      winLose("lose");
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <StyledWrapper>
      <StyledPokeContainer className={loseState()}>
        <StyledPokemonImage
          key={randImgKey}
          src={pokemonImageLeft}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
          onClick={loseState() ? () => {} : () => reviewAnswer(pokemonLName)}
        />
      </StyledPokeContainer>
      <StyledMiddleWrapper>
        <StyledTimer>{timer}</StyledTimer>
        <StyledPokeball src="Pokeball.svg" width={140} />
        <StyledScore>SCORE: {score}</StyledScore>
      </StyledMiddleWrapper>
      <StyledPokeContainer className={loseState()}>
        <StyledPokemonImage
          key={randImgKey}
          src={pokemonImageRight}
          alt=" "
          hidden={hideImg()}
          className={loadAnim}
          onClick={
            loseState()
              ? () => {}
              : () => {
                  reviewAnswer(pokemonRName);
                }
          }
        />
      </StyledPokeContainer>
    </StyledWrapper>
  );
}

export default PokeContainer;
