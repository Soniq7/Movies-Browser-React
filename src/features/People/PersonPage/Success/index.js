import PageTile from "../../../../common/Tiles/PageTile";
import Section from "../../../../common/Section";
import Tile from "../../../../common/Tiles/Tile";
import { PageMain } from "../../../../common/main";
import { Item, List } from "./styled";

const Success = ({ personData, personCreditsData, genreList }) => {
  let cast = [];
  let crew = [];

  if (personCreditsData) {
    crew = personCreditsData.crew;
    cast = personCreditsData.cast;
  }

  console.log(cast);

  return (
    <PageMain>
      <Section
        content={
          personData ? (
            <PageTile
              isPersonTile={true}
              name={personData.name}
              description={personData.biography}
              dateOfBirth={personData.birthday}
              placeOfBirth={personData.place_of_birth}
              image={personData.profile_path}
            />
          ) : (
            ""
          )
        }
      />

      {cast.length > 0 ? (
        <Section
          header={`Movies - cast (${cast.length})`}
          content={
            <List>
              {cast
                ? cast.map((role) => (
                    <Item key={role.id}>
                      <Tile
                        isActorPageTile={true}
                        image={role.poster_path}
                        name={role.title}
                        job={role.character}
                        year={role.release_date.substring(0, 4)}
                        genres={role.genre_ids.map(
                          (genreId) =>
                            genreList.find((genre) => genre.id === genreId)
                              ?.name
                        )}
                        score={role.vote_average.toFixed(1)}
                        votes={role.vote_count}
                        id={role.id}
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

      {crew.length > 0 ? (
        <Section
          header={`Movies - crew (${crew.length})`}
          content={
            <List>
              {crew
                ? crew.map((role) => (
                    <Item key={role.id}>
                      <Tile
                        image={role.poster_path}
                        name={role.title}
                        job={role.job}
                        genres={role.genre_ids.map(
                          (genreId) =>
                            genreList.find((genre) => genre.id === genreId)
                              ?.name
                        )}
                        score={role.vote_average.toFixed(1)}
                        votes={role.vote_count}
                        id={role.id}
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
  );
};

export default Success;
