import styled, { css } from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: auto;
    background-color: red;
    position: absolute;
    z-index: 2;
    /* &::backdrop {
        background-color: purple;
    } */
    top: 0;
    ${({fixed}) => fixed && css`
        position: fixed;
    `}
    ${({aside}) => aside && css`
        width: 300px;
        left: 0;
    `}
    ${({right}) => right && css`
        right: 0;
        left: auto;
    `}
`

export const ModalClose = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    display: flex;
    margin-left: auto;
    padding: 1rem;
    cursor: pointer;
    color: ${({theme}) => theme.colors.dark};
    ${({white}) => white && css`
        color: ${({theme}) => theme.colors.light};
    `}
`