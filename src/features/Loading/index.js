import { Loader } from "../../common/Loader/styled";
import { Wrapper } from "./styled";
import { PageMain } from "../../common/main";

const Loading = () => (
  <PageMain>
    <Wrapper>
      <Loader />
    </Wrapper>
  </PageMain>
);

export default Loading;
