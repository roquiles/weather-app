import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --text-color: #F6F4F3;
        --blue-200: #b4c2d0;
        --blue-600: #354E6E;
        --blue-800: #293241;
        --blue-900: #1F2532;
        --gradient: linear-gradient( 135deg, #2c8c99 10%, #28464b 100%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {  
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--blue-600);
    }

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: var(--text-color);
    }
    
    h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;
