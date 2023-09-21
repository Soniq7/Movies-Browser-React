import { ListItem, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { Main } from "../../../../common/main";

const Success = ({ results }) => (
  <Main>
    <Section
      header="Popular people"
      content={
        <ListItem>
          {results
            ? results.map((person) => (
                <Item key={person.id}>
                  <Tile
                    isPersonTile={true}
                    name={person.name}
                    image={person.profile_path}
                    id={person.id}
                  />
                </Item>
              ))
            : null}
        </ListItem>
      }
    />
  </Main>
);

export default Success;
