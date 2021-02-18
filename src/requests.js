const API_KEY = "97230a5880b5ddbfb455462c8c14b2cf";
export const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const biboMovie = {
  name: "Blood In Blood Out",
  videoId: "NMj89zgI8Yc",
  backdrop_path:
    "https://2.bp.blogspot.com/-SEJm11kQa-k/WUTz5xj_0qI/AAAAAAAA_cM/Bewdbqutet002C3KiTyHstabdcKa5YfbwCLcBGAs/s1600/14_054b598468e279686b913ccb72967a65.jpg",
  poster_path: "https://i.imgur.com/t6uv73M.jpg",
  overview:
    'Based on the true life experiences of poet Jimmy Santiago Baca, the film focuses on step-brothers Paco and Cruz, and their bi-racial cousin Miklo. It opens in 1972, as the three are members of an East L.A. gang known as the "Vatos Locos", and the story focuses on how a violent crime and the influence of narcotics alter their lives. Miklo is incarcerated and sent to San Quentin, where he makes a "home" for himself. Cruz becomes an exceptional artist, but a heroin addiction overcomes him with tragic results. Paco becomes a cop and an enemy to his "carnal", Miklo.',
};

export const passionOfTheChrist = {
  name: "Passion of the Christ",
  backdrop_path:
    "https://www.themoviedb.org/t/p/original/rplJDpuEI5Gr34LnKOl1XLg9zIT.jpg",
  poster_path:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nhjN31KWWlhnQWujGpQqxDxRWSK.jpg",
  overview:
    "A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
};

export const menaceToSociety = {
  name: "Menace To Society",
  backdrop_path:
    "https://www.themoviedb.org/t/p/original/dkGmpYzDzuyk8q3mzr3kI2a6urV.jpg",
  poster_path:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/guvPiEOeXwROpfCb2LkHkVEvOck.jpg",
  overview:
    "Sobering and incisive, this cautionary drama centers on a street tough 18-year-old facing a moral quandary while trying to turn his life around.",
};

export const theImitationGame = {
  name: "The Imitation Game",
  backdrop_path:
    "https://www.themoviedb.org/t/p/original/caQp2MhwfrTYGqVr7d9ayn8tqQ7.jpg",
  poster_path:
    "https://www.themoviedb.org/t/p/original/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
  overview:
    "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
};

export const theBlindSide = {
  name: "Passion of the Christ",
  backdrop_path: "",
  poster_path: "",
  overview: "",
};

export const getBannerMovies = [biboMovie];
export const getLorenzosPicks = [
  biboMovie,
  passionOfTheChrist,
  menaceToSociety,
  theImitationGame,
  theBlindSide,
];
