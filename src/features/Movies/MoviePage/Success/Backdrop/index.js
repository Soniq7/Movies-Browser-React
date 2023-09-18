import {
  Shadow,
  BackdropPoster,
  Header,
  Wrapper,
  Content,
  Title,
} from "./styled";
import shadow from "../../../../../images/shadow.png";

const Backdrop = ({ imagePath, title, score, votes }) => {
  return (
    <Header>
      <Shadow src={shadow} />
      <Wrapper>
        <Content>
          <Title>{title}</Title>
        </Content>
        <BackdropPoster
          src={`https://image.tmdb.org/t/p/original/${imagePath}`}
        />
      </Wrapper>
    </Header>
  );
};

export default Backdrop;
