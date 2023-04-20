import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        height: 100vh;
        display: grid;
        place-items: center;
        /* background-color: rgb(197 245 240); */
        
        /* Get Theme in GlobalStyle */
        background-image: ${({ theme }) => theme.color.bg};
    }
`;
