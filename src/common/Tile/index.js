import { Tiled, 
    TileImage, 
    TileContent, 
    TileHeader, 
    TileYear, 
    TileGenres, 
    TileTags, 
    TileView, 
    TileRatingIcon, 
    TileRating, 
    TileVoice } from "./styled";
  import poster from "../../images/poster.png";
  import icon from "../../images/shape-star.png";
  
  const Tile = () => {
    return (
      <Tiled>
          <TileImage src={poster} alt="" />
          <TileContent>
              <TileHeader>Mulan</TileHeader>
              <TileYear>2020</TileYear>
              <TileGenres>
                  <TileTags>Action</TileTags>
                  <TileTags>Adventure</TileTags>
                  <TileTags>Drama</TileTags>
              </TileGenres>
          </TileContent>
          <TileView>
              <TileRatingIcon src={icon} alt="" />
              <TileRating>7.8</TileRating>
              <TileVoice>35 votes</TileVoice>
          </TileView>
      </Tiled>
      
    ) 
  };
  
  export default Tile;
  