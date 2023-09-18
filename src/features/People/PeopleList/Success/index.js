import { ListItem, Item } from "./styled";
import PersonTile from "../../../../common/PersonTile";
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
  </Main>
);

export default Success;
