import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "movies";

export const StorageContext = createContext();

// Creating a custom hook for storage context
export function useStorage() {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }

  return context;
}

export function StorageProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState([]);

  async function saveMovieToStorage(movie) {
    try {
      const existingMovies = await AsyncStorage.getItem(storageKey);
      let movies = existingMovies ? JSON.parse(existingMovies) : [];

      // to prevent saving the same movies in storage
      const isDuplicate = movies.some((m) => m.id === movie.id);

      if (isDuplicate) {
        console.warn("Movie already exists in storage.");
        return;
      }

      // adding movie to the storage array
      movies.push(movie);
      await AsyncStorage.setItem(storageKey, JSON.stringify(movies));

      setSavedMovies(movies);
      console.log("Movie saved successfully:", movies);
    } catch (err) {
      console.error("Error saving movie:", err);
    }
  }

  // getting movies from storage and saving it in state variable which will be used in rented and watch screen
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

  //deleting the movie from storage array and updating state variable savedMovies
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
