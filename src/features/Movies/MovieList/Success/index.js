import { ListItem, Item } from "./styled";
import Tile from "../../../../common/Tiles/Tile";
import Section from "../../../../common/Section";
import { ListMain } from "../../../../common/main";
import Pagination from "../../../Pagination/index";

const Success = ({ results }) => (
  <>
    <ListMain>
      <Section
        header="Popular movies"
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

export default Success;
