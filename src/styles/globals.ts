import { createGlobalStyle } from "styled-components";
import { colors } from "../../constants";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: 'antialiased';
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
    color: ${colors.black};
  }
`;

export default GlobalStyle;
