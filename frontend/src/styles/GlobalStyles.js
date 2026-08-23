import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-primary);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: #000;
    overflow-x: hidden;
  }

  /* Neu-brutalism global değişkenler */
  :root {
    --border-main: 4px solid #000;
    --border-thin: 2px solid #000;
    --box-shadow-main: 6px 6px 0px 0px #000;
    --box-shadow-hover: 10px 10px 0px 0px #000;
    --box-shadow-active: 0px 0px 0px 0px #000;
    
    --bg-primary: #fcfcf5; /* Tasarımdaki kırık krem arka plan */
    --bg-accent-yellow: #ffde59;
    --bg-accent-pink: #ff99c8;
    --bg-accent-blue: #8ae0ff;
    --bg-accent-orange: #ffb347;
    
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;
    --spacing-xl: 64px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
