import styled, { css } from 'styled-components'

export const NavBar = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.light};
    ${({variant}) => variant === 'primary' && css`
        background-color: ${({theme}) => theme.colors.primary};
    `}
    ${({variant}) => variant === 'pink' && css`
        background-color: ${({theme}) => theme.colors.pink};
    `}
    ${({variant}) => variant === 'purple' && css`
        background-color: ${({theme}) => theme.colors.purple};
    `}
    ${({variant}) => variant === 'dark' && css`
        background-color: ${({theme}) => theme.colors.xdark};
    `}
    ${({variant}) => variant === 'light' && css`
        background-color: ${({theme}) => theme.colors.light};
        color: ${({theme}) => theme.colors.dark};
        border-bottom: 1px solid;
        border-color: ${({theme}) => theme.colors.secondary};
    `}
`
export const Navigation = styled.nav`
    height: 70px;
    ${({items}) => items === 'items' && css`
        display: flex;
        justify-content: space-between;
        align-items: center;  
    `}
`
export const NavItems = styled.div`
    display: flex;
    gap: .5rem;
    ${({hide}) => hide === 'hide' && css`
        display: none;
    `}
    ${({show}) => show === 'xs' && css`
        @media only screen and (min-width: 576px) {
            display: block;
        }
    `}
    ${({show}) => show === 'sm' && css`
        @media only screen and (min-width: 768px) {
            display: block;
        }
    `}
    ${({show}) => show === 'md' && css`
        @media only screen and (min-width: 992px) {
            display: block;
        }
    `}
    ${({show}) => show === 'lg' && css`
        @media only screen and (min-width: 1200px) {
            display: block;
        }
    `}
    ${({show}) => show === 'xl' && css`
        @media only screen and (min-width: 1360px) {
            display: block;
        }
    `}
`
export const NavList = styled.div`
    display: flex;
`
export const MobileMenu = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    height: 1.2rem;
    color: ${({theme}) => theme.colors.dark};
    ${({color}) => color === 'white' && css`
        color: ${({theme}) => theme.colors.light};
    `}
    ${({hide}) => hide === 'xs' && css`
        @media only screen and (min-width: 576px) {
            display: none;
        }
    `}
    ${({hide}) => hide === 'sm' && css`
        @media only screen and (min-width: 768px) {
            display: none;
        }
    `}
    ${({hide}) => hide === 'md' && css`
        @media only screen and (min-width: 992px) {
            display: none;
        }
    `}
    ${({hide}) => hide === 'lg' && css`
        @media only screen and (min-width: 1200px) {
            display: none;
        }
    `}
    ${({hide}) => hide === 'xl' && css`
        @media only screen and (min-width: 1360px) {
            display: none;
        }
    `}
`