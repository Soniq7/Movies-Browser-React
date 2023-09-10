import { ListItem, Item, Header, Wrapper } from "./styled";
import Tile from "../../../../common/Tile";

const Success = ({ results }) => (
  <Wrapper>
    <Header>Popular people</Header>
    <ListItem>
      {results
        ? results.map((person) => (
            <Item key={person.id}>
              <Tile title={person.name} poster={person.profile_path} />
            </Item>
          ))
        : null}
    </ListItem>
  </Wrapper>
);

export default Success;
