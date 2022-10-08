import styled, { css } from "styled-components"

const fontWeightVariant = css`
    ${({fontWeight}) => fontWeight === 'bold' && css`
        font-weight: 700;
    `}
    ${({fontWeight}) => fontWeight === 'semibold' && css`
        font-weight: 600;
    `}
    ${({fontWeight}) => fontWeight === 'medium' && css`
        font-weight: 500;
    `}
    ${({fontWeight}) => fontWeight === 'regular' && css`
        font-weight: 400;
    `}
    ${({fontWeight}) => fontWeight === 'light' && css`
        font-weight: 300;
    `}
    ${({fontWeight}) => fontWeight === 'extralight' && css`
        font-weight: 200;
    `}
`

const baseThemeStyle = css`
    color: ${({theme}) => theme.mode === 'light' ? theme.colors.dark : theme.colors.light};
    ${({color}) => color === 'default' && css`
        color: ${({theme}) => theme.colors.dark};
    `}
    ${({color}) => color === 'white' && css`
        color: ${({theme}) => theme.colors.light};
    `}
    margin-top: 0;
    margin-bottom: 1rem;
`
const baseHeadStyle = css`
    font-family: ${({theme}) => theme.font.head};
`
export const Head1 = styled.h1`
    ${baseThemeStyle}
    ${baseHeadStyle}
    ${fontWeightVariant}
    font-weight: 700;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    ${({variant}) => variant === 'styledH2' && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${({variant}) => variant === 'styledH3' && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
    ${({variant}) => variant === 'styledH4' && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
`
export const Head2 = styled.h2`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 3rem);
    ${({variant}) => variant === 'styledH1' && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${({variant}) => variant === 'styledH3' && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
    ${({variant}) => variant === 'styledH4' && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
`
export const Head3 = styled.h3`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-weight: 600;
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    ${({variant}) => variant === 'styledH1' && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${({variant}) => variant === 'styledH2' && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${({variant}) => variant === 'styledH4' && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
`
export const Head4 = styled.h4`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-weight: 500;
    font-size: clamp(1.5rem, 5vw, 2rem);
    ${({variant}) => variant === 'styledH1' && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${({variant}) => variant === 'styledH2' && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${({variant}) => variant === 'styledH3' && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
`
export const Head5 = styled.h5`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-weight: 400;
    font-size: clamp(1rem, 5vw, 1.8rem);
`
export const Head6 = styled.h6`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-weight: 300;
    font-size: clamp(1rem, 5vw, 1.5rem);
`
export const Body1 = styled.p`
    ${baseThemeStyle}
    font-weight: 300;
    font-size: clamp(1rem, 5vw, 1rem);
`
export const Body2 = styled.p`
    ${baseThemeStyle}
    font-weight: 300;
    font-size: clamp(.8rem, 4vw, 1rem);
`