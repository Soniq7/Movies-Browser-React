import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination";
import { selectPeopleSearchTerm } from "../peopleSlice";
import NotFound from "../../../SearchResults/NotFound";

const Success = ({ results }) => {
  const [pageTitle, setPageTitle] = useState("Popular people");
  const searchTerm = useSelector(selectPeopleSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      setPageTitle(`Search results for "${searchTerm}" (${results.length})`);
    } else {
      setPageTitle("Popular people");
    }
  }, [searchTerm, results]);

  if (results.length === 0) {
    return <NotFound searchTerm={searchTerm} />;
  }

  return (
    <>
      <ListMain>
        <Section
          header={pageTitle}
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
