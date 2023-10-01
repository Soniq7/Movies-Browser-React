import {
  MovieTitle,
  Frame,
  PersonName,
  Photo,
  PersonTile,
  PersonContent,
  Poster,
  Rating,
  Review,
  Votes,
  Year,
  Job,
  MovieContent,
  GenreList,
  Role,
  MovieTile,
  Description,
} from "./styled";
import { StyledLink, GenreTag, RatingIcon } from "../defaultTileStyles";
import icon from "../../../images/shape-star.png";
import ImagePlaceholder from "../../ImagePlaceholder";

const Tile = ({
  isPersonTile,
  year,
  score,
  votes,
  image,
  genres,
  id,
  job,
  isActorPageTile,
  name,
  description,
}) => {
  if (isPersonTile)
    return (
      <StyledLink to={`/people/${id}`}>
        <PersonTile>
          <Frame>
            {image ? (
              <Photo src={`https://image.tmdb.org/t/p/original/${image}`} />
            ) : (
              <ImagePlaceholder isPersonTile={true} />
            )}
          </Frame>
          <PersonContent>
            <PersonName>{name}</PersonName>
            {job ? <Role>{job}</Role> : ""}
          </PersonContent>
        </PersonTile>
      </StyledLink>
    );

  return (
    <StyledLink to={`/movies/${id}`}>
      <MovieTile>
        {image ? (
          <Poster
            src={`https://image.tmdb.org/t/p/original/${image}`}
            alt="Movie Poster"
          />
        ) : (
          <ImagePlaceholder isPersonTile={false} />
        )}
        <MovieContent>
          <MovieTitle>{name}</MovieTitle>
          {!year && job ? <Job>{job}</Job> : ""}
          {year && job ? (
            <Job>
              {job} ({year})
            </Job>
          ) : (
            ""
          )}
          {!isActorPageTile && year ? <Year>{year}</Year> : ""}
          {genres ? (
            <GenreList>
              {genres.map((genre) => (
                <GenreTag key={genre}>{genre}</GenreTag>
              ))}
            </GenreList>
          ) : (
            ""
          )}
          {description ? <Description>{description}</Description> : ""}
          <Review>
            {score && score != 0 ? (
              <>
                <RatingIcon src={icon} alt="" />
                <Rating>{score}</Rating>
              </>
            ) : (
              ""
            )}
            <Votes>{votes ? `${votes} votes` : "No votes yet"}</Votes>
          </Review>
        </MovieContent>
      </MovieTile>
    </StyledLink>
  );
};

export default Tile;
