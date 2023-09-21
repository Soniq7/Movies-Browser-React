import { Name, Tile, Frame, Photo, StyledLink, Job, Content } from "./styled";
import ImagePlaceholder from "../ImagePlaceholder";

const PersonTile = ({ portrait, name, id, job, isPerson }) => (
  <StyledLink to={`/people/${id}`}>
    <Tile>
      <Frame>
        {portrait ? (
          <Photo src={`https://image.tmdb.org/t/p/original/${portrait}`} />
        ) : (
          <ImagePlaceholder isPerson={isPerson} />
        )}
      </Frame>
      <Content>
        <Name>{name}</Name>
        {job ? <Job>{job}</Job> : ""}
      </Content>
    </Tile>
  </StyledLink>
);

export default PersonTile;
