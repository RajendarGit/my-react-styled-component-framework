import React from 'react'
import { Box } from '../Style/Box'
import { Card, CardContent } from '../Style/Card'
import { Container } from '../Style/Container'
import { Body1, Head1, Head4 } from '../Style/Typography'

export const CardComponent = () => {
  return (
    <Container>
      <Head1>Card Component</Head1>
      <Body1>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.
      </Body1>
      <Box>
        <Head4>Card Variations</Head4>
        <Card styled>
          <CardContent>
            <Body1 color="default">
              <pre>styled</pre> variant should be added for bordered card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="xs">
          <CardContent>
            <Body1 color="default">
              <pre>styled</pre> variant should be added for bordered card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="sm">
          <CardContent>
            <Body1 color="default">
            <pre>sm</pre> variant for small padded card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="md">
          <CardContent>
            <Body1 color="default">
              <pre>md</pre> variant for medium padded card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="lg">
          <CardContent>
            <Body1 color="default">
              <pre>lg</pre> variant for large padded card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="xl">
          <CardContent>
            <Body1 color="default">
              <pre>lg</pre> variant for large padded card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="xxl">
          <CardContent>
            <Body1 color="default">
              <pre>lg</pre> variant for large padded card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="lg" variant="primary">
          <CardContent>
            <Body1 color="white">
              <pre>primary</pre> variant for primary color card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="lg" variant="pink">
          <CardContent>
            <Body1 color="white">
              <pre>pink</pre> variant for pink color card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="lg" variant="purple">
          <CardContent>
            <Body1 color="white">
              <pre>purple</pre> variant for purple color card
            </Body1>
          </CardContent>
        </Card>
        <br/>
        <Card styled size="lg" variant="dark">
          <CardContent>
            <Body1 color="white">
              <pre>dark</pre> variant for dark color card
            </Body1>
          </CardContent>
        </Card>
        <br/>
      </Box>
    </Container>
  )
}
