import styled, { css } from 'styled-components'

export const NavBar = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.light};
    ${({primary}) => primary && css`
        background-color: ${({theme}) => theme.colors.primary};
    `}
    ${({pink}) => pink && css`
        background-color: ${({theme}) => theme.colors.pink};
    `}
    ${({purple}) => purple && css`
        background-color: ${({theme}) => theme.colors.purple};
    `}
    ${({dark}) => dark && css`
        background-color: ${({theme}) => theme.colors.xdark};
    `}
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
export const NavList = styled.div`
    display: flex;
`
export const MobileMenu = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    height: 1.2rem;
    color: ${({theme}) => theme.colors.dark};
    ${({white}) => white && css`
        color: ${({theme}) => theme.colors.light};
    `}
    ${({hideXS}) => hideXS && css`
        @media only screen and (min-width: 576px) {
            display: none;
        }
    `}
    ${({hideSM}) => hideSM && css`
        @media only screen and (min-width: 768px) {
            display: none;
        }
    `}
    ${({hideMD}) => hideMD && css`
        @media only screen and (min-width: 992px) {
            display: none;
        }
    `}
    ${({hideLG}) => hideLG && css`
        @media only screen and (min-width: 1200px) {
            display: none;
        }
    `}
    ${({hideXL}) => hideXL && css`
        @media only screen and (min-width: 1360px) {
            display: none;
        }
    `}
`