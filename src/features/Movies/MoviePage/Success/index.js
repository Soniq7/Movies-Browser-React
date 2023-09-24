import PageTile from "../../../../common/Tiles/PageTile";
import Section from "../../../../common/Section";
import Tile from "../../../../common/Tiles/Tile";
import { Item, List } from "./styled";
import { PageMain } from "../../../../common/main";
import Backdrop from "./Backdrop/index";

const Success = ({ movieData, movieCredits }) => {
  let cast = [];
  let crew = [];

  if (movieCredits) {
    crew = movieCredits.crew;
    cast = movieCredits.cast;
  }

  return (
    <>
      {movieData && movieData.backdrop_path ? (
        <Backdrop
          image={movieData.backdrop_path}
          name={movieData.title}
          score={movieData.vote_average.toFixed(1)}
          votes={movieData.vote_count}
        />
      ) : (
        ""
      )}
      <PageMain>
        <Section
          content={
            movieData ? (
              <PageTile
                isPersonTile={false}
                name={movieData.title}
                description={movieData.overview}
                image={movieData.poster_path}
                production={movieData.production_countries}
                releaseDate={movieData.release_date}
                genreList={movieData.genres}
                score={movieData.vote_average.toFixed(1)}
                votes={movieData.vote_count}
              />
            ) : (
              ""
            )
          }
        />

        {cast ? (
          <Section
            header="Cast"
            content={
              <List>
                {cast
                  ? cast.map((person) => (
                      <Item key={person.id}>
                        <Tile
                          isPersonTile={true}
                          image={person.profile_path}
                          name={person.name}
                          job={person.character}
                          id={person.id}
                        />
                      </Item>
                    ))
                  : ""}
              </List>
            }
          />
        ) : (
          ""
        )}

        {crew ? (
          <Section
            header="Crew"
            content={
              <List>
                {crew
                  ? crew.map((person) => (
                      <Item key={person.id}>
                        <Tile
                          isPersonTile={true}
                          image={person.profile_path}
                          name={person.name}
                          job={person.job}
                          id={person.id}
                        />
                      </Item>
                    ))
                  : ""}
              </List>
            }
          />
        ) : (
          ""
        )}
      </PageMain>
    </>
  );
};

export default Success;
