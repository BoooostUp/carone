import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard", "Noto Sans", "sans-serif";
    word-break: keep-all;
    font-size: 62.5%;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    opacity: 0.5;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #C7C7C7;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
