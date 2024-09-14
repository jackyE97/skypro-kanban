import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*:before,
  *:after {
    box-sizing: border-box;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }
  
  ul li {
    list-style: none;
  }
  
  html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`;

export const Container = styled.div`
max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Hover01 = css`
  &:hover {
  background-color: #33399b;
}
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;

  &:after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
}
`; 

export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`;


// Функция для применения стилей
export const themeColor = ($color) => css`
  ${$color === "Web Design" && css`
  background-color: ${({ theme }) => theme.colors.orangeBg};
    color: ${({ theme }) => theme.colors.orangeText};
`}
  ${$color === "Copywriting" && css`
  background-color: ${({ theme }) => theme.colors.purpleBg};
    color: ${({ theme }) => theme.colors.purpleText};
`}
  ${$color === "Research" && css`
   background-color: ${({ theme }) => theme.colors.greenBg};
    color: ${({ theme }) => theme.colors.greenText};
`}
  ${$color === "Без темы" && css`
  background-color: ${({ theme }) => theme.colors.grayBg};
    color: ${({ theme }) => theme.colors.grayText};
`}
`;