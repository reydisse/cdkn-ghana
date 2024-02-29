import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset existing styles if needed */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set body styles with Myriad Pro */
  body {
    font-family: 'Myriad Pro', sans-serif;
  }
`;
