import styled from "styled-components";

export const DropdownMenu = styled.div`
    position: absolute;
    will-change: transform;
    top: 0px;
    left: 0px;
    transform: translate3d(0px, 37px, 0px);
    right: auto;
    bottom: auto;
    z-index: 1;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    color: ${({theme}) => theme.mode === 'light' ? theme.colors.dark : theme.colors.light};
    background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.light : theme.colors.dark};
    border: 1px solid;
    border-color: ${({theme}) => theme.mode === 'light' ? theme.colors.grey : theme.colors.xdark};
`
export const DropdownMenuLink = styled.a`
    display: block;
    padding: .7rem 1rem;
    &:hover {
        background-color: ${({theme}) => theme.mode === 'light' ? theme.colors.grey : theme.colors.xdark};
    }
`
export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`