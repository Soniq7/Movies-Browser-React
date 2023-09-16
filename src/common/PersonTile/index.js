import { Name, Tile, Frame, Photo, StyledLink, Job, Content } from "./styled";
import ImagePlaceholder from "../ImagePlaceholder";

const PersonTile = ({ portrait, name, id, job, isPerson }) => (
  <Tile>
    <Frame>
      <StyledLink to={`/people/${id}`}>
        {portrait ? (
          <Photo src={`https://image.tmdb.org/t/p/original/${portrait}`} />
        ) : (
          <ImagePlaceholder isPerson={isPerson} />
        )}
      </StyledLink>
    </Frame>
    <Content>
      <Name>
        <StyledLink to={`/people/${id}`}>{name}</StyledLink>
      </Name>
      {job ? <Job>{job}</Job> : ""}
    </Content>
  </Tile>
);

export default PersonTile;
