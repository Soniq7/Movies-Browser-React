import {
  nextMoviePage,
  prevMoviePage,
  lastMoviePage,
  firstMoviePage,
  selectMoviePage,
  fetchMovies,
} from "../Movies/MovieList/moviesSlice";

import {
  nextPeoplePage,
  prevPeoplePage,
  lastPeoplePage,
  firstPeoplePage,
  selectPeoplePage,
  fetchPeople,
} from "../People/PeopleList/peopleSlice";

import { useDispatch, useSelector } from "react-redux";

import {
  Wrapper,
  Button,
  Buttons,
  CurrentPages,
  Pages,
  VectorSecondActive,
  VectorSecond,
  VectorFirst,
  VectorFirstDisabled,
} from "./styled";

const Pagination = ({ isMovieList }) => {
  const dispatch = useDispatch();
  const moviePage = useSelector(selectMoviePage);
  const peoplePage = useSelector(selectPeoplePage);

  if (isMovieList) {
    return (
      <Wrapper>
        <Buttons>
          <Button
            onClick={() => {
              dispatch(firstMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 1}
          >
            {moviePage > 1 ? <VectorSecondActive /> : <VectorFirst />}
            First
          </Button>
          <Button
            onClick={() => {
              dispatch(prevMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 1}
          >
            {moviePage > 1 ? <VectorSecondActive /> : <VectorFirst />}
            Previous
          </Button>
        </Buttons>
        <CurrentPages>
          <Pages>Page</Pages>
          {moviePage}
          <Pages>of</Pages>
          {500}
        </CurrentPages>
        <Buttons>
          <Button
            onClick={() => {
              dispatch(nextMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 500}
          >
            {moviePage === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
            Next
          </Button>
          <Button
            onClick={() => {
              dispatch(lastMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 500}
          >
            {moviePage === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
            Last
          </Button>
        </Buttons>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(firstPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 1}
        >
          {peoplePage > 1 ? <VectorSecondActive /> : <VectorFirst />}
          First
        </Button>
        <Button
          onClick={() => {
            dispatch(prevPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 1}
        >
          {peoplePage > 1 ? <VectorSecondActive /> : <VectorFirst />}
          Previous
        </Button>
      </Buttons>
      <CurrentPages>
        <Pages>Page</Pages>
        {peoplePage}
        <Pages>of</Pages>
        {500}
      </CurrentPages>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(nextPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 500}
        >
          {peoplePage === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
          Next
        </Button>
        <Button
          onClick={() => {
            dispatch(lastPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 500}
        >
          {peoplePage === 500 ? <VectorFirstDisabled /> : <VectorSecond />}
          Last
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Pagination;
