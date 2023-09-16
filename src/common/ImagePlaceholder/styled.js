import { ReactComponent as CameraIcon } from "../../images/cameraIcon.svg";
import { ReactComponent as PersonIcon } from "../../images/personIcon.svg";
import { styled } from "styled-components";

export const Camera = styled(CameraIcon)``;
export const Person = styled(PersonIcon)``;

export const MovieFrame = styled.div`
  background: ${({ theme }) => theme.colors.background.imagePlaceholder};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 292px;
  height: 434px;
  border-radius: 5px;
  margin-bottom: 7px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const PersonFrame = styled(MovieFrame)`
  width: 176px;
  height: 231px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;
