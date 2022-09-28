import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

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
        background-image: url(${background});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        object-fit: cover;
        font-family: 'Poppins', sans-serif;
    }
    .root {
        width: 90%;
        max-width: 90%;
        height: 90%;
        margin-top: 1.3rem;
        border: 1px solid white;
    }
`;

export default GlobalCss;