import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NTc2MWVhMDhkODdmMzM2NzhmNjUyMjRhMDA3MyIsInN1YiI6IjY0Zjc3OWQ1OGUyMGM1MGNkN2YzOTY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-sFQnatRfH853jfmr4C8Wg8P-E-_5XdO5Fl9CLW-yw",
  },
};

export const getMovieCredits = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
    if (response.status !== 200) {
      return "error";
    }
    return response.data;
  } catch {
    return "error";
  }
};
