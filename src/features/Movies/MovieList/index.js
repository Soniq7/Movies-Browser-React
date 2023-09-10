import Tile from "../../../common/Tile";
import { Wrapper, Header, ListItem, Item } from "./styled";

const MovieList = () => {
    return (
        <Wrapper>
            <Header>Popular movie</Header>
           <ListItem>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item>
                <Item>
                    <Tile></Tile>
                </Item><Item>
                    <Tile></Tile>
                </Item>
           </ListItem>
        </Wrapper>
    )
};

export default MovieList;