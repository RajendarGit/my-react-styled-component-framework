import styled, { css } from 'styled-components'

export const NavBar = styled.div`
    /* background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.xdark};
    color: ${({theme}) => theme.colors.light}; */
`
export const Navigation = styled.nav`
    height: 70px;
    ${({items}) => items && css`
        display: flex;
        justify-content: space-between;
        align-items: center;  
    `}
`
export const NavItems = styled.div`
    display: flex;
    gap: .5rem;
    ${({hide}) => hide && css`
        display: none;
    `}
    ${({showXS}) => showXS && css`
        @media only screen and (min-width: 576px) {
            display: block;
        }
    `}
    ${({showSM}) => showSM && css`
        @media only screen and (min-width: 768px) {
            display: block;
        }
    `}
    ${({showMD}) => showMD && css`
        @media only screen and (min-width: 992px) {
            display: block;
        }
    `}
    ${({showLG}) => showLG && css`
        @media only screen and (min-width: 1200px) {
            display: block;
        }
    `}
    ${({showXL}) => showXL && css`
        @media only screen and (min-width: 1360px) {
            display: block;
        }
    `}
`
export const NavList = styled.a`
    padding: .5rem 1rem;
    &:hover {
        background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.primary : theme.colors.dark};
    }
`