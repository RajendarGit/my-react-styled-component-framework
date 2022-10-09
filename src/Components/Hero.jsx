import React from 'react'
import { Box } from '../Style/Box'
import { Container } from '../Style/Container'
import { Body1, Head1 } from '../Style/Typography'

export const Hero = () => {
  return (
    <Container>
      <Box>
        <Head1 light>Welcome to BOX Framework</Head1>
        <Body1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit facilis adipisci quo omnis ad a, neque ea, magni corporis, vel nostrum! Perferendis tenetur autem error nulla, maxime voluptas similique.
        </Body1>
      </Box>
    </Container>
  )
}
