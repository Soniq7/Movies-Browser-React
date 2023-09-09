import styled from "styled-components";
import { ReactComponent as LogoIcon} from "../../images/icon.svg";

export const Logo = styled.span`
  display: inline-flex;
  height: 48px;
  padding: 4px 70px 4px 0px;
  gap: 12px;
`;

export const VideoIcon = styled(LogoIcon)`
  width: 40px;
  height: 40px;
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.colors.navigation.text};
  display: flex;
  align-self: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -1.5px;
  text-transform: capitalize;
`;
