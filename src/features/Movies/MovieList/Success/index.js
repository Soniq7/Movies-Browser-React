import { List, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import { ListSection } from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination/index";
import NotFound from "../../../../common/NotFound";

const Success = ({ movies, genreList, header, searchTerm }) => {
  if (movies.length === 0) {
    return <NotFound searchTerm={searchTerm} />;
  }

  return (
    <>
      <ListMain>
        <ListSection
          header={header}
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
                        description={movie.overview}
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
