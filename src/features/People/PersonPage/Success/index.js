import PageTile from "../../../../common/PageTile";
import Section from "../../../../common/Section";
import Tile from "../../../../common/Tile";
import { Item, List } from "./styled";

const Success = ({ personData, personCreditsData }) => {
  let cast = [];
  let crew = [];

  if (personCreditsData) {
    crew = personCreditsData.crew;
    cast = personCreditsData.cast;
  }

  console.log(cast);

  return (
    <>
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
                        poster={role.poster_path}
                        title={role.title}
                        job={role.character}
                        year={role.release_date.substring(0, 4)}
                        genres={"."}
                        rating={role.vote_average}
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
                        poster={role.poster_path}
                        title={role.title}
                        job={role.job}
                        genres={"."}
                        rating={role.vote_average}
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
    </>
  );
};

export default Success;
