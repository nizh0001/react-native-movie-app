import { createContext, useState } from "react";

export const SearchContext = createContext();

const BASE_URl = "https://api.themoviedb.org/3/search/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDU4YzYyZmQ3OTk1YTI3NDkzOTgxZWFmNmU2M2U5NiIsIm5iZiI6MTcxMDc5ODMxMi4yNDYsInN1YiI6IjY1ZjhiNWU4MzdiM2E5MDE2NGNjNjJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pg2C0LVfMH3NvoqluNPJEtSiLkeJuNtZ4NxpBxNDao4",
  },
};
export function SearchProvider({ children }) {
  const [moviesData, setMoviesData] = useState([]);

  async function fetchMovies(query) {
    try {
      const response = await fetch(
        `${BASE_URl}?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setMoviesData(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  function removeMovieFromSearchList(id) {
    setMoviesData((prevMovieData) =>
      prevMovieData.filter((item) => item.id != id)
    );
  }

  return (
    <SearchContext.Provider
      value={{ moviesData, fetchMovies, removeMovieFromSearchList }}
    >
      {children}
    </SearchContext.Provider>
  );
}
