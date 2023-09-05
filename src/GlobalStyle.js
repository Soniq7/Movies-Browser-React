import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        color: ${({ theme }) => theme.colors.primaryText};
        background: ${({ theme }) => theme.colors.siteBackground};
        line-height: 1.5;
        font-family: Poppins, sans-serif;
    }
`;