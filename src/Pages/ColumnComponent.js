import React from 'react'
import styled from 'styled-components'
import { Box } from '../Style/Box'
import { Card } from '../Style/Card'
import { Container } from '../Style/Container'
import { Body1, Head1 } from '../Style/Typography'

const WrapContainer = styled(Box)`
    display: grid;
    place-items: center;
`

const BoxWrap = styled(Box)`
    display: grid;
    gap:  1rem;
    width: 100%;
    @media (min-width: 576px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 120px);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 120px);
    }
`
const MyCard = styled(Card)`
    width: 100%;
    height: 150px;
    object-fit: cover;
    @media (min-width: 576px) {
        height: 100%;
        &:nth-of-type(1) {
            grid-column: 1 / span 1	;
            grid-row: 1 / span 2;
        }
        &:nth-of-type(2) {
            grid-column: 2 / span 2	;
        }
        &:nth-of-type(3) {
            grid-column: 3 / 2;
            grid-row: 1 / span 3;
        }
        &:nth-of-type(4) {
            grid-column: 3 / 3;
            grid-row: 1 / span 3;
        }
        &:nth-of-type(6) {
            grid-column: 1 / 1;
            grid-row: 3 / span 3;
        }
    }
    @media (min-width: 992px) {
        &:nth-of-type(1) {
            grid-column: 1 / span 1	;
            grid-row: 1 / span 1;
        }
        &:nth-of-type(2) {
            grid-column: 2 / span 2	;
        }
        &:nth-of-type(3) {
            grid-column: 4 / 4;
            grid-row: 1 / span 3;
        }
        &:nth-of-type(4) {
            grid-column: 1 / 1;
            grid-row: 2 / span 2;
        }
        &:nth-of-type(6) {
            grid-column: 3 / 3;
            grid-row: 2 / span 2;
        }
    }
`

export const ColumnComponent = () => {
  return (
    <Container>
        <Head1>Complex Column Component</Head1>
        <Body1>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.
        </Body1>
        <br/>
        <WrapContainer>
            <BoxWrap>
                <MyCard variant="primary"></MyCard>
                <MyCard variant="pink"></MyCard>
                <MyCard variant="purple"></MyCard>
                <MyCard variant="dark"></MyCard>
                <MyCard variant="primary"></MyCard>
                <MyCard variant="purple"></MyCard>
                <MyCard variant="pink"></MyCard>
            </BoxWrap>
        </WrapContainer>
    </Container>
  )
}
