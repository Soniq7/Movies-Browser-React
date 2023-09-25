import { ReactComponent as CameraIcon } from "../../images/cameraIcon.svg";
import { ReactComponent as PersonIcon } from "../../images/personIcon.svg";
import { styled } from "styled-components";

export const Camera = styled(CameraIcon)``;
export const Person = styled(PersonIcon)``;

export const MovieFrame = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.background.imagePlaceholder};
  border-radius: 5px;
  display: flex;
  height: 434px;
  justify-content: center;
  margin-bottom: 7px;
  width: 292px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 169px;
    width: 114px;
  }
`;

export const PersonFrame = styled(MovieFrame)`
  height: 231px;
  width: 176px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 178px;
    width: 120px;
  }
`;

export const PersonPageFrame = styled(MovieFrame)``;
