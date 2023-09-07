import { HashRouter, Redirect, Route, Switch,  } from "react-router-dom/cjs/react-router-dom";
import Navigation from "../Navigation";
import Movies from "../features/Movies";
import People from "../features/People";
import { toMovies, toPeople } from "../routes";

export default () => (
  <HashRouter>
    <Navigation />
     <Switch>
     <Route path={toMovies()}>
        <Movies />
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
