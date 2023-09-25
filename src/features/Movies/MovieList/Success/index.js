import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListItem, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination/index";
import { selectSearchTerm } from "../moviesSlice";

const Success = ({ results }) => {
  const [pageTitle, setPageTitle] = useState("Popular movies");
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      setPageTitle(`Search results for "${searchTerm}" (${results.length})`);
    } else {
      setPageTitle("Popular movies");
    }
  }, [searchTerm, results]);

  return (
    <>
      <ListMain>
        <Section
          header={pageTitle}
          content={
            <ListItem>
              {results
                ? results.map((movie) => (
                    <Item key={movie.id}>
                      <Tile
                        name={movie.original_title}
                        year={movie.release_date.substring(0, 4)}
                        score={movie.vote_average.toFixed(1)}
                        votes={movie.vote_count}
                        image={movie.poster_path}
                        genres={"."}
                        id={movie.id}
                      />
                    </Item>
                  ))
                : null}
            </ListItem>
          }
        />
      </ListMain>
      <Pagination isMovieList={true} />
    </>
  );
};

export default Success;
