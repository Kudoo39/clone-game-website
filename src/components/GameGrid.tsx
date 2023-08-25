import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, loading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //for column 5

  const filteredGames = selectedGenre
    ? games.filter((game) =>
        game.parent_platforms.some(
          (platform) => platform.platform.id === selectedGenre.id
        )
      )
    : games;

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={5}
      >
        {loading &&
          Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
