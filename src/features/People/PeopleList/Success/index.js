import { ListItem, Item, Header, Wrapper, Section } from "./styled";
import PersonTile from "../../../../common/PersonTile";

const Success = ({ results }) => (
  <Section>
    <Wrapper>
      <Header>Popular people</Header>
      <ListItem>
        {results
          ? results.map((person) => (
              <Item key={person.id}>
                <PersonTile name={person.name} portrait={person.profile_path} />
              </Item>
            ))
          : null}
      </ListItem>
    </Wrapper>
  </Section>
);

export default Success;
