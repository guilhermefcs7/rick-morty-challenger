import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #000
  }
`;

export default GlobalStyle;
