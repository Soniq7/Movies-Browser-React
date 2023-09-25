import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination/index";
import { selectSearchTerm } from "../moviesSlice";
import NotFound from "../../../SearchResults/NotFound";

const Success = ({ movies, genreList }) => {
  const [pageTitle, setPageTitle] = useState("Popular movies");
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    if (searchTerm) {
      setPageTitle(`Search results for "${searchTerm}" (${movies.length})`);
    } else {
      setPageTitle("Popular movies");
    }
  }, [searchTerm, movies]);

  if (movies.length === 0) {
    return <NotFound searchTerm={searchTerm} />;
  }

  return (
    <>
      <ListMain>
        <Section
          header={pageTitle}
          content={
            <List>
              {movies
                ? movies.map((movie) => (
                    <Item key={movie.id}>
                      <Tile
                        name={movie.original_title}
                        year={movie.release_date.substring(0, 4)}
                        score={movie.vote_average.toFixed(1)}
                        votes={movie.vote_count}
                        image={movie.poster_path}
                        genres={movie.genre_ids.map(
                          (genreId) =>
                            genreList.find((genre) => genre.id === genreId)
                              ?.name
                        )}
                        id={movie.id}
                      />
                    </Item>
                  ))
                : null}
            </List>
          }
        />
      </ListMain>
      <Pagination isMovieList={true} />
    </>
  );
};

export default Success;
