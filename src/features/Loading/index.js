import { Loader } from "../../common/Loader/styled";
import { Wrapper } from "./styled";
import { Main } from "../../common/main";

const Loading = () => (
  <Main>
    <Wrapper>
      <Loader />
    </Wrapper>
  </Main>
);

export default Loading;
