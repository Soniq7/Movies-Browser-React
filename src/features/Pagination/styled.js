import styled from "styled-components";
import { ReactComponent as PaginationVectorTwo } from "../../images/VectorTwo.svg";
import { ReactComponent as PaginationVectorFirst } from "../../images/VectorFirst.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 24px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #d6e4ff;
  outline: none;
  gap: 8px;

  &:disabled {
    background-color: #e4e6f0;
    cursor: not-allowed;
  }
`;

export const CurrentPages = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
`;

export const Pages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #7e839a;
`;

export const VectorFirst = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #0044cc;
`;

export const VectorFirstDisabled = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #7e839a;
  cursor: not-allowed;
  transform: rotate(180deg);
`;

export const VectorSecond = styled(PaginationVectorTwo)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
`;

export const VectorSecondDisabled = styled(PaginationVectorFirst)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  fill: #7e839a;
  cursor: not-allowed;
  transform: rotate(180deg);
`;

export const VectorSecondActive = styled(PaginationVectorTwo)`
  display: flex;
  flex-wrap: wrap;
  width: 7px;
  height: 11px;
  transform: rotate(180deg);
`;
