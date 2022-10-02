import styled, { css } from "styled-components";

export const Card = styled.div`
    width: 100%;
    ${({styled}) => styled && css`
        border: 1px solid ${({theme}) => theme.colors.secondary};
    `}
    ${({sm}) => sm && css`
        padding: .3rem;
    `}
    ${({md}) => md && css`
        padding: .7rem;
    `}
    ${({lg}) => lg && css`
        padding: 1rem;
    `}
    ${({primary}) => primary && css`
        background-color: ${({theme}) => theme.colors.primary};
        border: 1px solid ${({theme}) => theme.colors.primary};
    `}
    ${({pink}) => pink && css`
        background-color: ${({theme}) => theme.colors.pink};
        border: 1px solid ${({theme}) => theme.colors.pink};
    `}
    ${({purple}) => purple && css`
        background-color: ${({theme}) => theme.colors.purple};
        border: 1px solid ${({theme}) => theme.colors.purple};
    `}
    ${({dark}) => dark && css`
        background-color: ${({theme}) => theme.colors.xdark};
        border: 1px solid ${({theme}) => theme.colors.xdark};
    `}
`