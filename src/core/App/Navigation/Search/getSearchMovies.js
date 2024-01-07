import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjQzYmJhYTFlZTliMjc4NTY0OGU2OGZmMjQxNTMxMyIsInN1YiI6IjY0ZmY1ODEwNmEyMjI3MDBlMGYxYjM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eO7s0XybbuHr2zjyXgxbaM3bHmRGagGf66Ru61ucAAY",
  },
};

export const getSearchMoviesResult = async (query, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&page=${page ? page : 1}`;

  try {
    const response = await axios.get(url, options);

    if (response.status !== 200) {
      return "error";
    }

    return response.data;
  } catch (error) {
    console.error("Błąd:", error);
    return "error";
  }
};
