import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import SearchInput from "./SearchInput";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  search: string;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  sortOrder,
  search,
}: Props) => {
  const { games, error, loading } = useGames(
    selectedGenre,
    selectedPlatform,
    sortOrder,
    search
  );
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; //for column 4

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {loading &&
          Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
