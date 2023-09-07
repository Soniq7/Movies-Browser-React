import { toMovies, toPeople } from "../routes";
import { Navigation, NavList, List } from "./styled";


export default () => {
    return (
        <Navigation>
            <NavList>
                <List to={toMovies()}>
                    MOVIES
                </List>
                <List to={toPeople()}>
                    PEOPLE
                </List>
            </NavList>
        </Navigation>
    );
};