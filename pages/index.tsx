import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";
import PokeGuessApp from "../components/PokeGuessApp";
import TitleBar from "../components/TitleBar";

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const StyledBackgroundContainer = styled.div`
  background-image: url("Background.png");
  height: 100vh;
  height: 100dvh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => {
  const [pokemonRData, setPokemonRData]: any = useState("");
  const [pokemonLData, setPokemonLData]: any = useState("");
  const [pokemonQuestion, setPokemonQuestion]: any = useState("");
  const [selectedPokemon, setSelectedPokemon]: any = useState("");
  const [randImgKey, setRandImgKey]: any = useState(0);
  const [score, setScore]: any = useState(0);
  const [didLose, setDidLose]: any = useState(false);

  const randomPokemon: (inUseID?: number) => number = (inUseID) => {
    const pokemonID = Math.floor(Math.random() * 800 + 1);

    if (pokemonID !== inUseID) return pokemonID;
    return randomPokemon(inUseID);
  };

  const generatePokemon = () => {
    const pokemonRight = randomPokemon();
    const pokemonLeft = randomPokemon(pokemonRight);

    return [pokemonRight, pokemonLeft];
  };

  const [pokemonRight, pokemonLeft] = generatePokemon();

  const chosenQuestion = (pokemonR: any, pokemonL: any) => {
    const randomPick = [pokemonR, pokemonL][Math.floor(Math.random() * 2)];

    const questionGenerators = [
      // Legendary question (30% chance)
      {
        weight: 0.3,
        canAsk: () => pokemonR?.legendaryStatus !== pokemonL?.legendaryStatus,
        generate: () => ({
          pokemon: pokemonR?.legendaryStatus ? pokemonR : pokemonL,
          question: "is a Legendary pokemon?",
        }),
      },
      // Weight question (20% chance)
      {
        weight: 0.2,
        canAsk: () => pokemonR?.weight !== pokemonL?.weight,
        generate: () => ({
          pokemon: pokemonR?.weight > pokemonL?.weight ? pokemonR : pokemonL,
          question: "is heavier?",
        }),
      },
      // Height question (25% chance)
      {
        weight: 0.25,
        canAsk: () => pokemonR?.height !== pokemonL?.height,
        generate: () => ({
          pokemon: pokemonR?.height > pokemonL?.height ? pokemonR : pokemonL,
          question: "is taller?",
        }),
      },
      // Ability question (part of legendary fallback)
      {
        weight: 0.1,
        canAsk: () => pokemonR?.abilities !== pokemonL?.abilities,
        generate: () => ({
          pokemon: randomPick,
          question: `has the ability '${randomPick?.abilities}'?`,
        }),
      },
      // Name question (25% chance, also fallback)
      {
        weight: 0.25,
        canAsk: () => pokemonR?.name !== pokemonL?.name,
        generate: () => ({
          pokemon: randomPick,
          question: `has the name '${randomPick?.name}'?`,
        }),
      },
    ];

    // Filter to only questions that can be asked
    const availableQuestions = questionGenerators.filter((q) => q.canAsk());

    if (availableQuestions.length === 0) {
      setSelectedPokemon(randomPick);
      setPokemonQuestion(`has the name '${randomPick?.name}'?`);
      return;
    }

    // Weighted random selection
    const totalWeight = availableQuestions.reduce((sum, q) => sum + q.weight, 0);
    let random = Math.random() * totalWeight;

    for (const question of availableQuestions) {
      random -= question.weight;
      if (random <= 0) {
        const result = question.generate();
        setSelectedPokemon(result.pokemon);
        setPokemonQuestion(result.question);
        return;
      }
    }

    // Fallback to last available question
    const fallback = availableQuestions[availableQuestions.length - 1].generate();
    setSelectedPokemon(fallback.pokemon);
    setPokemonQuestion(fallback.question);
  };
  const pokeDataFetch = () => {
    const pokeRightRequest = axios.get(
      "/api/pokeapi/" + JSON.stringify(pokemonRight)
    );
    const pokeLeftRequest = axios.get(
      "/api/pokeapi/" + JSON.stringify(pokemonLeft)
    );
    axios.all([pokeRightRequest, pokeLeftRequest]).then(
      axios.spread((...responses) => {
        const pokeRightResponse = responses[0];
        const pokeLeftResponse = responses[1];

        setPokemonRData(pokeRightResponse.data);
        setPokemonLData(pokeLeftResponse.data);
        chosenQuestion(pokeRightResponse.data, pokeLeftResponse.data);
        setRandImgKey(Math.random() * 999);
      })
    );
  };

  useEffect(() => {
    pokeDataFetch();
  }, []);

  const winLoseCallback: any = (state: string) => {
    if (state === "win") {
      setScore(score + 1);
      pokeDataFetch();
    } else {
      console.log("YOU LOSE");
      setDidLose(true);
    }
  };
  return (
    <StyledBackgroundContainer>
      <Head>
        <title>The PokeGuess Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBar />
      <PokeGuessApp
        pokemonRImage={pokemonRData.sprite}
        pokemonLImage={pokemonLData.sprite}
        pokemonRName={pokemonRData.name}
        pokemonLName={pokemonLData.name}
        GeneratedQuestion={pokemonQuestion}
        selectedPokemon={selectedPokemon}
        winLose={winLoseCallback}
        didLose={didLose}
        randImgKey={randImgKey}
        score={score}
      />
    </StyledBackgroundContainer>
  );
};

export default Home;
