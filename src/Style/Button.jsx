import styled, { css } from 'styled-components'

const CssBaseline = css`
    border: 1px solid;
    font-size: ${({theme}) => theme.fontSizes.xs};
    padding: .7rem 1.3rem;
    background-color: ${({theme}) => theme.colors.xdark};
    border-color: ${({theme}) => theme.colors.xdark};
    color: ${({theme}) => theme.colors.light};
    text-align: ${({theme}) => theme.alignments.center};
    display: inline-block;
    cursor: pointer;
`
export const Button = styled.button`
    ${CssBaseline}
    ${({radius}) => radius === 'sm' && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusSmall};
    `}
    ${({radius}) => radius === 'md' && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusMedium};
    `}
    ${({radius}) => radius === 'lg' && css`
        border-radius: ${({theme}) => theme.borderRadius.radiusLarge};
    `}
    ${({variant}) => variant === 'primary' && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.xdark};
        border-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.xdark};
    `}
    ${({variant}) => variant === 'secondary' && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.secondary};
        border-color: ${({theme}) => theme.colors.secondary};
    `}
    ${({variant}) => variant === 'warning' && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.warning};
        border-color: ${({theme}) => theme.colors.warning};
    `}
    ${({variant}) => variant === 'danger' && css`
        ${CssBaseline}
        background-color: ${({theme}) => theme.colors.danger};
        border-color: ${({theme}) => theme.colors.danger};
    `}
`
