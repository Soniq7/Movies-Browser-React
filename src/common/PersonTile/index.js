import { Name, Tile, Frame, Photo } from "./styled";

const PersonTile = ({ portrait, name }) => (
  <Tile>
    <Frame>
      <Photo src={`https://image.tmdb.org/t/p/original/${portrait}`} />
    </Frame>
    <Name>{name}</Name>
  </Tile>
);

export default PersonTile;
