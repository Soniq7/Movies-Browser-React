import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NTc2MWVhMDhkODdmMzM2NzhmNjUyMjRhMDA3MyIsInN1YiI6IjY0Zjc3OWQ1OGUyMGM1MGNkN2YzOTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-sFQnatRfH853jfmr4C8Wg8P-E-_5XdO5Fl9CLW-yw",
  },
};

export const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list`,
    options
  );

  if (response.status !== 200) {
    return "error";
  }

  const { genres } = await response.data;

  return genres;
};
