import MainContainer from "./MainContainer";
import Question from "./Question";
import LoseScreen from "./LoseScreen";

type Props = {
  pokemonLImage: string;
  pokemonRImage: string;
  GeneratedQuestion: string;
  selectedPokemon: any;
  pokemonRName: string;
  pokemonLName: string;
  winLose: any;
  randImgKey: any;
  didLose: any;
  score: number;
};

function PokeGuessApp({
  pokemonLImage,
  pokemonRImage,
  GeneratedQuestion,
  selectedPokemon,
  pokemonRName,
  pokemonLName,
  winLose,
  randImgKey,
  didLose,
  score,
}: Props) {
  return (
    <div>
      <MainContainer
        pokemonImageLeft={pokemonLImage}
        pokemonImageRight={pokemonRImage}
        selectedPokemon={selectedPokemon}
        pokemonRName={pokemonRName}
        pokemonLName={pokemonLName}
        winLose={winLose}
        randImgKey={randImgKey}
        didLose={didLose}
        score={score}
      />
      <div>
        {didLose ? (
          <LoseScreen />
        ) : (
          <Question GeneratedQuestion={GeneratedQuestion} />
        )}
      </div>
    </div>
  );
}

export default PokeGuessApp;
