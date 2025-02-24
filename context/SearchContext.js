import { createContext, useState, useContext } from "react";

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

// creating custom hook for search context
export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}

export function SearchProvider({ children }) {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  //fetching movies and saving in array moviesData
  async function fetchMovies(query) {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URl}?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setMoviesData(data.results);
      setNotFound(data.results.length === 0); // it will be use in home screen to display message if there is no search results
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // removing the movie from array moviesData based on id of movie
  function removeMovieFromSearchList(id) {
    setMoviesData((prevMovieData) =>
      prevMovieData.filter((item) => item.id != id)
    );
  }

  return (
    <SearchContext.Provider
      value={{
        moviesData,
        fetchMovies,
        removeMovieFromSearchList,
        loading,
        notFound,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
