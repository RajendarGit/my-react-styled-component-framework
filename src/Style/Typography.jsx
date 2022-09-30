import styled, { css } from "styled-components"

const baseThemeStyle = css`
    color: ${({theme}) => theme.mode === 'light' ? theme.colors.dark : theme.colors.light};;
`

const baseHeadStyle = css`
    font-family: ${({theme}) => theme.font.head};
`
export const Head1 = styled.h1`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    ${props => props.styledH2 && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${props => props.styledH3 && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
    ${props => props.styledH4 && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
    ${props => props.bold && css`
        font-weight: 700;
    `}
    ${props => props.semibold && css`
        font-weight: 600;
    `}
    ${props => props.medium && css`
        font-weight: 500;
    `}
    ${props => props.regular && css`
        font-weight: 400;
    `}
    ${props => props.light && css`
        font-weight: 300;
    `}
    ${props => props.extralight && css`
        font-weight: 200;
    `}
`
export const Head2 = styled.h2`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(2rem, 5vw, 3rem);
    ${props => props.styledH1 && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${props => props.styledH3 && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
    ${props => props.styledH4 && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
`
export const Head3 = styled.h3`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    ${props => props.styledH1 && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${props => props.styledH2 && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${props => props.styledH4 && css`
        font-size: clamp(1.5rem, 5vw, 2rem);
    `};
`
export const Head4 = styled.h4`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(1.5rem, 5vw, 2rem);
    ${props => props.styledH1 && css`
        font-size: clamp(2.2rem, 5vw, 3.5rem);
    `};
    ${props => props.styledH2 && css`
        font-size: clamp(2rem, 5vw, 3rem);
    `};
    ${props => props.styledH3 && css`
        font-size: clamp(1.8rem, 5vw, 2.2rem);
    `};
`
export const Head5 = styled.h5`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(1rem, 5vw, 1.8rem);
`
export const Head6 = styled.h6`
    ${baseThemeStyle}
    ${baseHeadStyle}
    font-size: clamp(1rem, 5vw, 1.5rem);
`
export const Body1 = styled.p`
    ${baseThemeStyle}
    font-size: clamp(1rem, 5vw, 1rem);
`
export const Body2 = styled.p`
    ${baseThemeStyle}
    font-size: clamp(.8rem, 4vw, 1rem);
`