import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjQzYmJhYTFlZTliMjc4NTY0OGU2OGZmMjQxNTMxMyIsInN1YiI6IjY0ZmY1ODEwNmEyMjI3MDBlMGYxYjM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eO7s0XybbuHr2zjyXgxbaM3bHmRGagGf66Ru61ucAAY",
  },
};

export const getSearchPeopleResult = async (query, apiKey) => {
    const url = `https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(query)}&api_key=${apiKey}`;
    
    try {
      const response = await axios.get(url, options);
  
      if (response.status !== 200) {
        return "error";
      }
  
      return response.data;
    } catch (error) {
      console.error('Błąd:', error);
      return "error";
    }
  };