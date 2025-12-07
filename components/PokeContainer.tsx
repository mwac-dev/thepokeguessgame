import { clear } from "console";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { setTimeout } from "timers";

// Keyframes need to be defined before styled components that use them
const pokeballWobble = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-3deg);
  }
`;

const pokeballFail = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
`;

const overlayFlash = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;

  @media (max-width: 1200px) {
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }
`;

export const StyledPokeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  min-width: 250px;
  min-height: 250px;
  aspect-ratio: 1 / 1;
  z-index: 5;
  background-color: #fff;
  border-radius: 28px;
  margin: 20px;
  transition: all 0.5s ease;
  border: 10px solid #ffd344;
  flex-shrink: 0;

  &.didLose {
    background-color: #ff5362;
    border: 10px solid #fff;
  }

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin: 15px;
    border-width: 8px;
    border-radius: 24px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    min-width: 180px;
    min-height: 180px;
    margin: 10px;
    border-width: 6px;
    border-radius: 22px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    min-width: 140px;
    min-height: 140px;
    margin: 5px;
    border-width: 5px;
    border-radius: 20px;
  }
`;

export const StyledPokeballWrapper = styled.div`
  position: relative;
  display: flex;
  transform-origin: center bottom;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
  }

  &.wobble {
    animation: ${pokeballWobble} 0.6s ease-in-out;
    &::after {
      background-color: white;
      animation: ${overlayFlash} 0.6s ease-in-out;
    }
  }

  &.fail {
    animation: ${pokeballFail} 0.5s ease-in-out;
    &::after {
      background-color: #ff3333;
      animation: ${overlayFlash} 0.5s ease-in-out;
    }
  }
`;

export const StyledPokeball = styled.img`
  display: flex;
  width: 140px;
  height: auto;

  @media (max-width: 1200px) {
    width: 110px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 480px) {
    width: 70px;
  }
`;
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const scorePunch = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
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
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy transition */
  
  &:hover {
    cursor: pointer;
    width: 140%;
    height: 140%;
    animation: ${bounce} 1s infinite;
  }

  &:active {
    width: 110%;
    height: 110%;
    transform: scale(0.95);
  }
  
  animation-timing-function: cubic-bezier(1, 1, 1, 0.75);

  &.load-anim {
    animation: loadin 2s;
  }

  @keyframes loadin {
    0% {
      width: 0%;
      height: 50%;
      opacity: 0;
    }
    85% {
      width: 140%;
      height: 140%;
      opacity: 1;
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

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const StyledScore = styled.h1`
  display: flex;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &.punch {
    animation: ${scorePunch} 0.3s ease-out;
  }

  &.shake {
    animation: ${shake} 0.4s ease-in-out;
    color: #ff5362;
  }

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 3px 0;
  }
`;
export const StyledTimer = styled.h1`
  display: flex;
  color: #fff;
  font-weight: 200;
  font-size: 32px;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 3px 0;
  }
`;
export const StyledMiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  padding: 10px;

  @media (max-width: 768px) {
    order: -1;
    width: 100%;
    padding: 5px;
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
  const [scoreAnim, setScoreAnim] = useState("");
  const [pokeballAnim, setPokeballAnim] = useState("");
  const prevScoreRef = useRef(score);

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

  // Trigger punch animation on score increase
  useEffect(() => {
    if (score > prevScoreRef.current) {
      setScoreAnim("punch");
      setPokeballAnim("wobble");
      const timeout = setTimeout(() => {
        setScoreAnim("");
        setPokeballAnim("");
      }, 600);
      return () => clearTimeout(timeout);
    }
    prevScoreRef.current = score;
  }, [score]);

  // Trigger shake animation on loss
  useEffect(() => {
    if (didLose) {
      setScoreAnim("shake");
      setPokeballAnim("fail");
    }
  }, [didLose]);

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
        <StyledPokeballWrapper className={pokeballAnim}>
          <StyledPokeball src="Pokeball.svg" />
        </StyledPokeballWrapper>
        <StyledScore className={scoreAnim}>SCORE: {score}</StyledScore>
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
