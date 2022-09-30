import styled, { css } from 'styled-components'

const largeGutter = css`
    padding-left: 5rem;
    padding-right: 5rem;
`

export const Container = styled.div`
    margin-inline: auto;
    width: ${({theme}) => theme.windows.fixed}
    ${({fluid}) => fluid && css`
        width: ${({theme}) => theme.windows.fluid};
        padding-left: 15px;
        padding-right: 15px;
    `}
    ${props => props.fluid && props.largeGutter && css`
        ${largeGutter}        
    `}
    ${props => props.fluid && props.noGutter && css`
        padding-left: 0;
        padding-right: 0;
    `}
`