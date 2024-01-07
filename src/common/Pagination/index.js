import {
  nextMoviePage,
  prevMoviePage,
  lastMoviePage,
  firstMoviePage,
  selectMoviePage,
  fetchMovies,
  selectMaxMoviePages,
} from "../../features/Movies/MovieList/moviesSlice";

import {
  nextPeoplePage,
  prevPeoplePage,
  lastPeoplePage,
  firstPeoplePage,
  selectPeoplePage,
  fetchPeople,
  selectMaxPeoplePages,
} from "../../features/People/PeopleList/peopleSlice";
import { getWidth } from "../../common/getWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  const maxMoviePages = useSelector(selectMaxMoviePages);
  const peoplePage = useSelector(selectPeoplePage);
  const maxPeoplePages = useSelector(selectMaxPeoplePages);

  const [viewportWidth, setViewportWidth] = useState(getWidth());

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(getWidth());
    };

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, [viewportWidth]);

  if (isMovieList) {
    return viewportWidth > 605 ? (
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
          {maxMoviePages}
        </CurrentPages>
        <Buttons>
          <Button
            onClick={() => {
              dispatch(nextMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === maxMoviePages}
          >
            {moviePage === maxMoviePages ? (
              <VectorFirstDisabled />
            ) : (
              <VectorSecond />
            )}
            Next
          </Button>
          <Button
            onClick={() => {
              dispatch(lastMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === maxMoviePages}
          >
            {moviePage === maxMoviePages ? (
              <VectorFirstDisabled />
            ) : (
              <VectorSecond />
            )}
            Last
          </Button>
        </Buttons>
      </Wrapper>
    ) : (
      <Wrapper>
        <Buttons>
          <Button
            onClick={() => {
              dispatch(firstMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 1}
          >
            {moviePage > 1 ? (
              <>
                <VectorSecondActive />
                <VectorSecondActive />
              </>
            ) : (
              <>
                <VectorFirst />
                <VectorFirst />
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              dispatch(prevMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === 1}
          >
            {moviePage > 1 ? (
              <>
                <VectorSecondActive />
              </>
            ) : (
              <>
                <VectorFirst />
              </>
            )}
          </Button>
        </Buttons>
        <CurrentPages>
          <Pages>Page</Pages>
          {moviePage}
          <Pages>of</Pages>
          {maxMoviePages}
        </CurrentPages>
        <Buttons>
          <Button
            onClick={() => {
              dispatch(nextMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === maxMoviePages}
          >
            {moviePage === maxMoviePages ? (
              <VectorFirstDisabled />
            ) : (
              <VectorSecond />
            )}
          </Button>
          <Button
            onClick={() => {
              dispatch(lastMoviePage());
              dispatch(fetchMovies());
            }}
            disabled={moviePage === maxMoviePages}
          >
            {moviePage === maxMoviePages ? (
              <>
                <VectorFirstDisabled />
                <VectorFirstDisabled />
              </>
            ) : (
              <>
                <VectorSecond />
                <VectorSecond />
              </>
            )}
          </Button>
        </Buttons>
      </Wrapper>
    );
  }
  return viewportWidth > 605 ? (
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
        {maxPeoplePages}
      </CurrentPages>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(nextPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === maxPeoplePages}
        >
          {peoplePage === maxPeoplePages ? (
            <VectorFirstDisabled />
          ) : (
            <VectorSecond />
          )}
          Next
        </Button>
        <Button
          onClick={() => {
            dispatch(lastPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === maxPeoplePages}
        >
          {peoplePage === maxPeoplePages ? (
            <VectorFirstDisabled />
          ) : (
            <VectorSecond />
          )}
          Last
        </Button>
      </Buttons>
    </Wrapper>
  ) : (
    <Wrapper>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(firstPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 1}
        >
          {peoplePage > 1 ? (
            <>
              <VectorSecondActive />
              <VectorSecondActive />
            </>
          ) : (
            <>
              <VectorFirst />
              <VectorFirst />
            </>
          )}
        </Button>
        <Button
          onClick={() => {
            dispatch(prevPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === 1}
        >
          {peoplePage > 1 ? <VectorSecondActive /> : <VectorFirst />}
        </Button>
      </Buttons>
      <CurrentPages>
        <Pages>Page</Pages>
        {peoplePage}
        <Pages>of</Pages>
        {maxPeoplePages}
      </CurrentPages>
      <Buttons>
        <Button
          onClick={() => {
            dispatch(nextPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === maxPeoplePages}
        >
          {peoplePage === maxPeoplePages ? (
            <VectorFirstDisabled />
          ) : (
            <VectorSecond />
          )}
        </Button>
        <Button
          onClick={() => {
            dispatch(lastPeoplePage());
            dispatch(fetchPeople());
          }}
          disabled={peoplePage === maxPeoplePages}
        >
          {peoplePage === maxPeoplePages ? (
            <>
              <VectorFirstDisabled />
              <VectorFirstDisabled />
            </>
          ) : (
            <>
              <VectorSecond />
              <VectorSecond />
            </>
          )}
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Pagination;
