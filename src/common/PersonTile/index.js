import { Name, Tile, Frame, Photo, StyledLink } from "./styled";

const PersonTile = ({ portrait, name, id }) => (
  <Tile>
    <Frame>
      <StyledLink to={`/people/${id}`}>
        <Photo src={`https://image.tmdb.org/t/p/original/${portrait}`} />
      </StyledLink>
    </Frame>
    <Name>
      <StyledLink to={`/people/${id}`}>{name}</StyledLink>
    </Name>
  </Tile>
);

export default PersonTile;
