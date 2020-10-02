import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyle />
  </ThemeProvider>
);
