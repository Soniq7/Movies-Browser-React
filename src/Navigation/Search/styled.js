import styled from "styled-components";

export const Search = styled.input`
  width: 432px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 33px;
  margin-left: 411px;
  border: 1px solid ${({ theme }) => theme.colors.navigation.searchBorder};
  background: ${({ theme }) => theme.colors.navigation.searchBackground};
`;
