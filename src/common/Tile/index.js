import {
  Tiled,
  TileImage,
  TileContent,
  TileHeader,
  TileYear,
  TileGenres,
  TileTags,
  TileView,
  TileRatingIcon,
  TileRating,
  TileVotes,
} from "./styled";
import icon from "../../images/shape-star.png";

const Tile = ({ title, year, rating, votes, poster, genres }) => {
  return (
    <Tiled>
      <TileImage src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
      <TileContent>
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
      </TileContent>
      <TileView>
        {rating ? (
          <>
            <TileRatingIcon src={icon} alt="" />
            <TileRating>{rating}</TileRating>
          </>
        ) : (
          ""
        )}
        {votes ? <TileVotes>{votes} votes</TileVotes> : ""}
      </TileView>
    </Tiled>
  );
};

export default Tile;
