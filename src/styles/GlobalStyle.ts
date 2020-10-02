import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/pvl8mez.css");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    font-family: "Nobel", Ubuntu, "Helvetica Neue", sans-serif;
    color: ${theme.color.dark};
    background: ${theme.color.light};
  }
`;
