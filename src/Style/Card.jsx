import styled, { css } from "styled-components";

export const Card = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    ${({sm}) => sm && css`
        padding: .3rem;
    `}
    ${({md}) => md && css`
        padding: .7rem;
    `}
    ${({lg}) => lg && css`
        padding: 1rem;
    `}
`