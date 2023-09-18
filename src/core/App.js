import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navigation from "../Navigation";
import MovieList from "../features/Movies/MovieList";
import PeopleList from "../features/People/PeopleList";
import { toMovies, toPeople } from "../routes";
import Pagination from "../features/Movies/Pagination";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovies()}>
        <MovieList />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route path="/">
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
    <Pagination/>
  </HashRouter>
);
