import {
  Button,
  Danger,
  Description,
  ErrorHeader,
  Wrapper,
  Container,
} from "./styled";
import { Main } from "../../common/main";

const Error = () => (
  <Main>
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
  </Main>
);

export default Error;
