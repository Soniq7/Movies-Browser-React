import {
  StyledTile,
  TileImage,
  TileTitle,
  TileYear,
  TileGenres,
  TileTags,
  TileReview,
  TileRatingIcon,
  TileRating,
  TileVotes,
  TileWrapper,
  StyledLink,
  Job,
} from "./styled";
import icon from "../../images/shape-star.png";
import ImagePlaceholder from "../ImagePlaceholder";

const Tile = ({
  title,
  year,
  rating,
  votes,
  poster,
  genres,
  id,
  job,
  isActorPageTile,
}) => {
  return (
    <StyledLink to={`/movies/${id}`}>
      <StyledTile>
        {poster ? (
          <TileImage
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt="Movie Poster"
          />
        ) : (
          <ImagePlaceholder isPerson={false} />
        )}
        <TileWrapper>
          <TileTitle>{title}</TileTitle>
          {!year && job ? <Job>{job}</Job> : ""}
          {year && job ? (
            <Job>
              {job} ({year})
            </Job>
          ) : (
            ""
          )}
          {!isActorPageTile && year ? <TileYear>{year}</TileYear> : ""}
          {genres ? (
            <TileGenres>
              <TileTags>Action</TileTags>
              <TileTags>Adventure</TileTags>
            </TileGenres>
          ) : (
            ""
          )}

          <TileReview>
            {rating && rating != 0 ? (
              <>
                <TileRatingIcon src={icon} alt="" />
                <TileRating>{rating}</TileRating>
              </>
            ) : (
              ""
            )}
            <TileVotes>{votes ? `${votes} votes` : "No votes yet"}</TileVotes>
          </TileReview>
        </TileWrapper>
      </StyledTile>
    </StyledLink>
  );
};

export default Tile;
