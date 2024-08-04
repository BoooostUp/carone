import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './Router/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
