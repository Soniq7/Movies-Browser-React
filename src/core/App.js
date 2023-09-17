import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { Main } from "./main";
import Navigation from "../Navigation";
import MovieList from "../features/Movies/MovieList";
import MoviePage from "../features/Movies/MoviePage";
import PeopleList from "../features/People/PeopleList";
import PersonPage from "../features/People/PersonPage";
import { toMovies, toMovie, toPeople, toPerson } from "../routes";

export default () => (
  <HashRouter>
    <Navigation />
    <Main>
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
    </Main>
  </HashRouter>
);
