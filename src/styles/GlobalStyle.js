import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }

  overflow-y: scroll;

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }

  p {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button, input, textarea {
    font-family: 'Pretendard', sans-serif;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a:focus {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }
`;
    
export default GlobalStyles;