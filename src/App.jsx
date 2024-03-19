import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';

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
