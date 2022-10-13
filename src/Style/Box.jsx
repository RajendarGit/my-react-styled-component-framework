import styled, { css } from "styled-components";

export const Box = styled.div`
    display: block;
    margin: 0;
    padding: 0;
    ${({position}) => position === 'fixed' && css`
        position: fixed;
    `}
`