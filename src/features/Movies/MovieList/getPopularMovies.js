import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NTc2MWVhMDhkODdmMzM2NzhmNjUyMjRhMDA3MyIsInN1YiI6IjY0Zjc3OWQ1OGUyMGM1MGNkN2YzOTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-sFQnatRfH853jfmr4C8Wg8P-E-_5XdO5Fl9CLW-yw",
  },
};

export const getPopularMovies = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );

  if (response.status !== 200) {
    return "error";
  }

  return await response.data;
};
