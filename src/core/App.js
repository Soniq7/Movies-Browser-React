import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navigation from "../Navigation";
import MovieList from "../features/Movies/MovieList";
import MoviePage from "../features/Movies/MoviePage";
import PeopleList from "../features/People/PeopleList";
import PersonPage from "../features/People/PersonPage";
import { toMovies, toMovie, toPeople, toPerson } from "../routes";
import PaginationMovie from "../features/Movies/PaginationMovie";
import PaginationPeople from "../features/People/PaginationPeople";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie()}>
        <MoviePage />
      </Route>
      <Route path={toMovies()}>
        <MovieList />
        <PaginationMovie />
      </Route>
      <Route path={toPerson()}>
        <PersonPage />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
        <PaginationPeople />
      </Route>
      <Route path="/">
        <Redirect to={toMovies()} />
        <PaginationMovie />
      </Route>
    </Switch>
  </HashRouter>
);
