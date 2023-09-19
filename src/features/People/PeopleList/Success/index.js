import { ListItem, Item } from "./styled";
import PersonTile from "../../../../common/PersonTile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination";

const Success = ({ results }) => (
  <>
    <ListMain>
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
    </ListMain>
    <Pagination />
  </>
);

export default Success;
