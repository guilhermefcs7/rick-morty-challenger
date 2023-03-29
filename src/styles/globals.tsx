import { createGlobalStyle } from "styled-components";
import { colors } from "../../constants";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: 'antialiased';
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${colors.black};
  }
`;

export default GlobalStyle;
