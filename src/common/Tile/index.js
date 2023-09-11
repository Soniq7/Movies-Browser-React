import {
  StyledTile,
  TileImage,
  TileHeader,
  TileYear,
  TileGenres,
  TileTags,
  TileReview,
  TileRatingIcon,
  TileRating,
  TileVotes,
  TileWrapper,
} from "./styled";
import icon from "../../images/shape-star.png";

const Tile = ({ title, year, rating, votes, poster, genres }) => {
  return (
    <StyledTile>
      <TileImage src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
      <TileWrapper>
        <TileHeader>{title}</TileHeader>
        {year ? <TileYear>{year}</TileYear> : ""}
        {genres ? (
          <TileGenres>
            <TileTags>Action</TileTags>
            <TileTags>Adventure</TileTags>
            <TileTags>Drama</TileTags>
          </TileGenres>
        ) : (
          ""
        )}

        <TileReview>
          {rating ? (
            <>
              <TileRatingIcon src={icon} alt="" />
              <TileRating>{rating}</TileRating>
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
