import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjQzYmJhYTFlZTliMjc4NTY0OGU2OGZmMjQxNTMxMyIsInN1YiI6IjY0ZmY1ODEwNmEyMjI3MDBlMGYxYjM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eO7s0XybbuHr2zjyXgxbaM3bHmRGagGf66Ru61ucAAY",
  },
};

export const getSeachResult = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=title&include_adult=false&language=en-US&page=1",
    options
  );

  if (response.status !== 200) {
    return "error";
  }

  return await response.data;
};
