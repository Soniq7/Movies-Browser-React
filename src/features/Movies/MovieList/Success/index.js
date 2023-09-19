import { ListItem, Item } from "./styled";
import Tile from "../../../../common/Tile";
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
                      title={movie.original_title}
                      year={movie.release_date.substring(0, 4)}
                      rating={movie.vote_average.toFixed(1)}
                      votes={movie.vote_count}
                      poster={movie.poster_path}
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
