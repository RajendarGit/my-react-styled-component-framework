import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0 auto;
    font-family: ${({theme}) => theme.font.body};
    background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.light : theme.colors.dark};
}
a {
    cursor: pointer;
}
`
export default GlobalStyle