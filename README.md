# Movie Rental App

A React Native application built with Expo that allows users to search, rent, and watch movies using data from The Movie Database (TMDB) API.

## Description

The Movie Rental App is a mobile application that provides a seamless movie browsing and rental experience. Users can search for movies, rent them, and keep track of their rented collection with persistent local storage.

## Features

- **Home Screen**: Search for movies via TMDB API and browse a scrollable list of movie cards
- **Rented Screen**: View all rented movies in a scrollable layout
- **Watch Screen**: Watch placeholder videos and mark movies as watched
- **Search Dialog**: Search for movies by name
- **Rent Confirmation**: Confirm movie rental with price information (no real payment processed)
- **Persistent Storage**: All rented movies are saved locally using AsyncStorage
- **Video Playback**: Full-screen video player with landscape mode support
- **Custom Theme**: Consistent styling with React Native Elements

## API Key Configuration

This app uses The Movie Database (TMDB) API to fetch movie data. You need to configure your API key before running the app.

### Getting a TMDB API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create a free account
3. Go to your account settings → API section
4. Request an API key (it's free for development)
5. Copy your API key

### Setting Up the API Key

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Open the `.env` file and replace `your_tmdb_api_key_here` with your actual TMDB API key:

```
EXPO_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
```

3. Save the file and restart your Expo development server
