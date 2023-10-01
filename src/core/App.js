import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../features/Genres/genresSlice";
import Navigation from "../features/Navigation";
import MovieList from "../features/Movies/MovieList";
import MoviePage from "../features/Movies/MoviePage";
import PeopleList from "../features/People/PeopleList";
import PersonPage from "../features/People/PersonPage";
import { toMovies, toMovie, toPeople, toPerson } from "../routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MovieList />
        </Route>
        <Route path={toPerson()}>
          <PersonPage />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
