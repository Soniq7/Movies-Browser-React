import { PageMain } from "../../../common/main";
import { NotFoundImage, Wrapper, Header } from "./styled";

const NotFound = ({ searchTerm }) => (
  <PageMain>
    <Wrapper>
      <Header>{`Sorry, there are no results for "${searchTerm}"`}</Header>
      <NotFoundImage />
    </Wrapper>
  </PageMain>
);

export default NotFound;
