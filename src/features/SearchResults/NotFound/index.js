import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../Movies/MovieList/moviesSlice";
import { PageMain } from "../../../common/main";

const NotFound = () => {
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <PageMain>
      <Wrapper>
        <Container>
          <ErrorHeader>
            {`Sorry, there are no results for "${searchTerm}"`}
          </ErrorHeader>
        </Container>
      </Wrapper>
    </PageMain>
  );
};

export default NotFound;
