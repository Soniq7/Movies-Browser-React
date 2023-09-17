import { ListItem, Item } from "./styled";
import PersonTile from "../../../../common/PersonTile";
import Section from "../../../../common/Section";

const Success = ({ results }) => (
  <Section
    header="Popular people"
    content={
      <ListItem>
        {results
          ? results.map((person) => (
              <Item key={person.id}>
                <PersonTile
                  name={person.name}
                  portrait={person.profile_path}
                  id={person.id}
                />
              </Item>
            ))
          : null}
      </ListItem>
    }
  />
);

export default Success;
