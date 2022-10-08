import React from 'react'
import { Container } from '../Style/Container'
import { Body1, Body2, Head1, Head2, Head3, Head4, Head5, Head6 } from '../Style/Typography'

export const TypographyComponent = () => {
  return (
    <Container>
      <Head1>Typography</Head1>
      <Body1>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.
      </Body1>
      <Head1>H1</Head1>
      <Head2>H2</Head2>
      <Head3>H3</Head3>
      <Head4>H4</Head4>
      <Head5>H5</Head5>
      <Head6>H6</Head6>
      <Body1>Body 1</Body1>
      <Body2>Body 2</Body2>
    </Container>
  )
}
