import styled, { css } from "styled-components";

export const Card = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.mode === 'dark' ? theme.colors.xdark : theme.colors.light};
    color: ${({theme}) => theme.mode === 'light' ? theme.colors.dark : theme.colors.light};
    ${({styled}) => styled && css`
        border: 1px solid ${({theme}) => theme.colors.secondary};
    `}
    ${({size}) => size === 'xs' && css`
        padding: ${({theme}) => theme.sizes.xs};
    `}
    ${({size}) => size === 'sm' && css`
        padding: ${({theme}) => theme.sizes.sm};
    `}
    ${({size}) => size === 'md' && css`
        padding: ${({theme}) => theme.sizes.md};
    `}
    ${({size}) => size === 'lg' && css`
        padding: ${({theme}) => theme.sizes.lg};
    `}
    ${({size}) => size === 'xl' && css`
        padding: ${({theme}) => theme.sizes.xl};
    `}
    ${({size}) => size === 'xxl' && css`
        padding: ${({theme}) => theme.sizes.xxl};
    `}
    ${({variant}) => variant === 'primary' && css`
        background-color: ${({theme}) => theme.colors.primary};
        border: 1px solid ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.light};
    `}
    ${({variant}) => variant === 'pink' && css`
        background-color: ${({theme}) => theme.colors.pink};
        border: 1px solid ${({theme}) => theme.colors.pink};
        color: ${({theme}) => theme.colors.light};
    `}
    ${({variant}) => variant === 'purple' && css`
        background-color: ${({theme}) => theme.colors.purple};
        border: 1px solid ${({theme}) => theme.colors.purple};
        color: ${({theme}) => theme.colors.light};
    `}
    ${({variant}) => variant === 'dark' && css`
        background-color: ${({theme}) => theme.colors.xdark};
        border: 1px solid ${({theme}) => theme.colors.xdark};
        color: ${({theme}) => theme.colors.light};
    `}
`
export const CardContent = styled.div`
    display: block;
`