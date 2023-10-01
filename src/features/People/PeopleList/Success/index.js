import { List, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import { ListSection } from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination";
import NotFound from "../../../../common/NotFound";

const Success = ({ results, header, searchTerm }) => {
  if (results.length === 0) {
    return <NotFound searchTerm={searchTerm} />;
  }

  return (
    <>
      <ListMain>
        <ListSection
          header={header}
          content={
            <List shortList={results.length < 7}>
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
};

export default Success;
