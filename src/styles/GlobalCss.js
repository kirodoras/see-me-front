import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    input, button {
        border: none;
    }
    a {
        text-decoration: none;
    }
    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        background: #0f152b;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        object-fit: cover;
        font-family: 'Poppins', sans-serif;
    }
    .root {
        width: 75rem;
        max-width: 75rem;
        padding: 0 1rem 0 1rem;
        height: 100%;
    }
`;

export default GlobalCss;