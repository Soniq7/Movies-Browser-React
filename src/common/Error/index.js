import {
  Button,
  Danger,
  Description,
  ErrorHeader,
  Wrapper,
  Container,
} from "./styled";
import { PageMain } from "../../common/main";

const Error = () => (
  <PageMain>
    <Wrapper>
      <Danger />
      <Container>
        <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
        <Description>
          Please check your network connection
          <br /> and try again
        </Description>
        <Button to="/">Back to home page</Button>
      </Container>
    </Wrapper>
  </PageMain>
);

export default Error;
