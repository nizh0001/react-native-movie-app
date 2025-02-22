import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "movies";

export const StorageContext = createContext();

export function StorageProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState([]);

  async function saveMovieToStorage(movie) {
    try {
      const existingMovies = await AsyncStorage.getItem(storageKey);
      let movies = existingMovies ? JSON.parse(existingMovies) : [];

      const isDuplicate = movies.some((m) => m.id === movie.id);
      if (isDuplicate) {
        console.warn("Movie already exists in storage.");
        return;
      }

      movies.push(movie);
      await AsyncStorage.setItem(storageKey, JSON.stringify(movies));

      setSavedMovies(movies);
      console.log("Movie saved successfully:", movies);
    } catch (err) {
      console.error("Error saving movie:", err);
    }
  }

  async function getMoviesFromStorage() {
    try {
      const strMovies = await AsyncStorage.getItem(storageKey);
      const movies = strMovies ? JSON.parse(strMovies) : [];

      setSavedMovies(movies);
    } catch (err) {
      console.error(err);
      setSavedMovies([]);
    }
  }

  async function deleteMovieFromStorage(id) {
    try {
      const strMovies = await AsyncStorage.getItem(storageKey);
      let movies = strMovies ? JSON.parse(strMovies) : [];

      movies = movies.filter((item) => item.id !== id);

      await AsyncStorage.setItem(storageKey, JSON.stringify(movies));

      setSavedMovies(movies);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMoviesFromStorage();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        savedMovies,
        getMoviesFromStorage,
        saveMovieToStorage,
        deleteMovieFromStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
