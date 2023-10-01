import { Header, StyledListSection, StyledPageSection } from "./styled";

export const ListSection = ({ header, content }) => (
  <StyledListSection>
    {header ? <Header>{header}</Header> : ""}
    {content}
  </StyledListSection>
);

export const PageSection = ({ header, content }) => (
  <StyledPageSection>
    {header ? <Header>{header}</Header> : ""}
    {content}
  </StyledPageSection>
);
