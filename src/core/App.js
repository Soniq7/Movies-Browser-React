import { HashRouter, Redirect, Route, Switch,  } from "react-router-dom/cjs/react-router-dom";
import Navigation from "../Navigation";
import MoviePage from "../features/MoviePage";
import People from "../features/People";
import { toMovies, toPeople } from "../routes";

export default () => (
  <HashRouter>
    <Navigation />
     <Switch>
     <Route path={toMovies()}>
        <MoviePage />
      </Route>
      <Route path={toPeople()}>
        <People />
      </Route>
      <Route path="/">
        <Redirect to={toMovies()} />
      </Route>
     </Switch>
  </HashRouter>

);
