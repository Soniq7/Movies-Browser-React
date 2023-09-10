import {
  Button,
  Danger,
  Description,
  ErrorHeader,
  Wrapper,
  Container,
} from "./styled";

const Error = () => (
  <Wrapper>
    <Danger />
    <Container>
      <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
      <Description>
        Please check your network connection
        <br /> and try again
      </Description>
      <Button>Back to home page</Button>
    </Container>
  </Wrapper>
);

export default Error;
