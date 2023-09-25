import { List, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination";

const Success = ({ results }) => (
  <>
    <ListMain>
      <Section
        header="Popular people"
        content={
          <List>
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
          </List>
        }
      />
    </ListMain>
    <Pagination />
  </>
);

export default Success;
