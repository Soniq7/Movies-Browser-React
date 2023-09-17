import { Header, StyledSection } from "./styled";

const Section = ({ header, content }) => (
  <StyledSection>
    {header ? <Header>{header}</Header> : ""}
    {content}
  </StyledSection>
);

export default Section;
