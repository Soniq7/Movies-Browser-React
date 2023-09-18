import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMoviesLoading, fetchMoviesSuccess, fetchMoviesError } from "../../Movies/MovieList/moviesSlice";
import { Wrapper, Button, Buttons, CurrentPages, Pages,  VectorSecondActive, VectorSecond, VectorFirst, VectorFirstDisabled } from './styled';
import { options } from './getKeyMovie';

const PaginationMovie = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const perPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchMoviesLoading());
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&per_Page=${perPage}&sort_by=popularity.desc&with_cast=false&with_companies=false&with_crew=false`,
        options
        );
        const result = await response.json();
        setData(result);

        const totalResults = result.total_results;
        const totalPages = Math.ceil(totalResults / perPage);
        setTotalPages(totalPages);
        dispatch(fetchMoviesSuccess(result));

      } catch (error) {
        console.error('Błąd pobierania danych:', error);
        dispatch(fetchMoviesError());
      }
    };

    fetchData();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const firstPage = () => {
    setPage(1);
  };

  const lastPage = () => {
    setPage(500);
  };

  return (
    <Wrapper>
      <ul>
        {Array.isArray(data) && data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Buttons>
        <Button onClick={firstPage} disabled={page === 1}>
          {page > 1 ? <VectorSecondActive/> : <VectorFirst />}
            First
        </Button>
        <Button onClick={prevPage} disabled={page === 1}>
        {page > 1 ? <VectorSecondActive/> : <VectorFirst />}
            Previous
        </Button>
        </Buttons>
        <CurrentPages>
          <Pages>Page</Pages>{page}<Pages>of</Pages>{500}
        </CurrentPages>
        <Buttons>
        <Button onClick={nextPage} disabled={page === 500}> 
          {page === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
          Next
        </Button>
        <Button onClick={lastPage} disabled={page === 500}>
          {page === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
          Last
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default PaginationMovie;