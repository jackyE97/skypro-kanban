import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { themeColor } from "../../global.styled.js";


export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  color: ${({ theme }) => theme.text};

${({ $color }) => themeColor($color)}

p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ theme }) => theme.text};
  ${({ $color }) => themeColor($color)}
}
`;


export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;
  outline: none;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;

  ${({ $color }) => themeColor($color)}
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.text};
    letter-spacing: 0.2px;
  }
`;
