import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  sortOrder: string,
  searchText: string
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGames>("/games", {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: sortOrder,
          search: searchText,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre, selectedPlatform, sortOrder, searchText]);

  return { games, error, loading };
};

export default useGames;
