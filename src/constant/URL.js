export const EXERCISE_URL = "https://exercisedb.p.rapidapi.com/exercises";
export const YOUTUBE_URL = "https://youtube-search-and-download.p.rapidapi.com";

export const YOUTUBE_OPTION = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const EXERCISE_OPTION = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
