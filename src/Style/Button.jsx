import styled, { css } from 'styled-components'

const CssBaseline = css`
    border: 1px solid;
    font-size: ${({theme}) => theme.fontSizes.xs};
    padding: .7rem 1.3rem;
    background-color: ${({theme}) => theme.colors.dark};
    border-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
    text-align: ${({theme}) => theme.alignments.center};
    display: inline-block;
    cursor: pointer;
`
export const Button = styled.button`
    ${CssBaseline}
    ${({roundedSmall}) => roundedSmall && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusSmall};
    `}
    ${({roundedMedium}) => roundedMedium && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusMedium};
    `}
    ${({roundedLarge}) => roundedLarge && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusLarge};
    `}
    ${({primary}) => primary && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.xdark};
        border-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.xdark};
    `}
    ${({secondary}) => secondary && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.secondary};
        border-color: ${({theme}) => theme.colors.secondary};
    `}
    ${({warning}) => warning && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.warning};
        border-color: ${({theme}) => theme.colors.warning};
    `}
    ${({danger}) => danger && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.danger};
        border-color: ${({theme}) => theme.colors.danger};
    `}
`
