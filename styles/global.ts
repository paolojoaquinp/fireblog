import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { Typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${Typography}
    :root {
        --primary-black: #222222;
        --primary-yellow: #D6F379;
        --primary-red: #E3513D;
        --white: #FFFFFF;
        --text-success: #FFFFFF;
        --black: #000000;
        --header-width: 88px;
    } 
    body {
        background-color: var(--primary-black);

    }
    * {
        transition: background-color 0.5s ease-in-out;
    }
    ${reset}
`;