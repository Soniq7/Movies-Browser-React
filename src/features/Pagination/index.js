import React, { useState, useEffect } from 'react';
import { Wrapper, Button, Buttons, CurrentPages, Pages, VectorSecond, VectorFirst } from './styled';

const Pagination = () => {
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const perPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&perPage=${perPage}&sort_by=popularity.desc&with_cast=false&with_companies=false&with_crew=false`);
        const result = await response.json();
        setData(result);

        const totalResults = result.total_results;
        const totalPages = Math.ceil(totalResults / perPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
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
    setPage(totalPages);
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
          <VectorFirst />
            First
        </Button>
        <Button onClick={prevPage} disabled={page === 1}>
          <VectorFirst />
            Previous
        </Button>
        </Buttons>
        <CurrentPages>
          <Pages>Page</Pages>{page}<Pages>of</Pages>{totalPages}
        </CurrentPages>
        <Buttons>
        <Button onClick={nextPage} disabled={page === totalPages}> 
          Next
          <VectorSecond />
        </Button>
        <Button onClick={lastPage} disabled={page === totalPages}>
          Last
          <VectorSecond />
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Pagination;