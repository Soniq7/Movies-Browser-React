import { Wrapper, Loader, Header } from "./styled";

const Loading = ({ header }) => (
  <main>
    <Wrapper>
      {header ? <Header>{header}</Header> : ""}
      <Loader />
    </Wrapper>
  </main>
);

export default Loading;
