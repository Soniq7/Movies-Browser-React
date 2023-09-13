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
} from "./styled";
import icon from "../../images/shape-star.png";

const Tile = ({ title, year, rating, votes, poster, genres, id }) => {
  return (
    <StyledTile>
      <StyledLink to={`/movies/${id}`}>
        <TileImage
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt="Movie Poster"
        />
      </StyledLink>
      <TileWrapper>
        <TileTitle>
          <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
        </TileTitle>
        {year ? <TileYear>{year}</TileYear> : ""}
        {genres ? (
          <TileGenres>
            <TileTags>Action</TileTags>
            <TileTags>Adventure</TileTags>
          </TileGenres>
        ) : (
          ""
        )}

        <TileReview>
          {rating ? (
            <>
              {rating ? <TileRatingIcon src={icon} alt="" /> : ""}
              <TileRating>{rating ? rating : "No votes yet"}</TileRating>
            </>
          ) : (
            ""
          )}
          {votes ? <TileVotes>{votes} votes</TileVotes> : ""}
        </TileReview>
      </TileWrapper>
    </StyledTile>
  );
};

export default Tile;
