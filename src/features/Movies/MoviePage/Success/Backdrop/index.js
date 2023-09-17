import {
  Shadow,
  BackdropPoster,
  Content,
  Title,
  Header,
  Container,
} from "./styled";

const Backdrop = ({ imagePath, title, score, votes }) => {
  return (
    <Header>
      <Container>
        <Shadow>
          <BackdropPoster
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
          />
          <Content>
            <Title>{title}</Title>
          </Content>
        </Shadow>
      </Container>
    </Header>
  );
};

export default Backdrop;
