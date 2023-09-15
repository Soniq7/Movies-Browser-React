import PageTile from "../../../../common/PageTile";
import Section from "../../../../common/Section";
import Tile from "../../../../common/Tile";

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

      {cast ? (
        <Section
          header={`Movies - cast (${cast.length})`}
          content={
            cast
              ? cast.map((role) => (
                  <Tile
                    poster={role.poster_path}
                    title={role.title}
                    genres={"."}
                    rating={role.vote_average}
                    votes={role.vote_count}
                  />
                ))
              : ""
          }
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Success;
