import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Box } from '../Style/Box'
import { Container } from '../Style/Container'
import { Body1, Body2, Head1, Head4 } from '../Style/Typography'
import { Button } from '../Style/Button'
import { Dropdown, DropdownMenu, DropdownMenuLink } from '../Style/Dropdown'

export const Hero = () => {

const HeroSection = styled.div`
      color: inherit;
`

const [text, SetText] = useState(false);
const [showDropdown, setShowDropDown] = useState(false);

const showTextFunction = () => SetText(!text);

const wrap = {
  transition: 'all .3s ease-out',
}

const dropdownToggle = () => setShowDropDown(!showDropdown);

  return (
    <Container>
      <HeroSection>
        <Head1 light>Welcome to the page</Head1>
        <Body1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit facilis adipisci quo omnis ad a, neque ea, magni corporis, vel nostrum! Perferendis tenetur autem error nulla, maxime voluptas similique.
        </Body1>

        <Button primary>Theme Button</Button>
        <Button primary roundedSmall>Primary Button</Button>
        <Button primary roundedMedium>Primary Button</Button>
        <Button primary roundedLarge>Primary Button</Button>
        <Button secondary>Primary Button</Button>
        <Button warning>Primary Button</Button>
        <Button danger>Primary Button</Button>
        <Button onClick={showTextFunction}>Show Section</Button>
        {text ?
          <Box style={wrap}>
            <Body1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iure.
            </Body1>
            <Body2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iure.
            </Body2>
          </Box> : <Head4>Yummyyyy !!!!!</Head4>
          }

          <Dropdown>
            <Button onClick={dropdownToggle} primary>Dropdown Button</Button>
            {showDropdown ? <DropdownMenu>
              <DropdownMenuLink onClick={dropdownToggle}>List One</DropdownMenuLink>
              <DropdownMenuLink onClick={dropdownToggle}>List Two</DropdownMenuLink>
              <DropdownMenuLink onClick={dropdownToggle}>List Three</DropdownMenuLink>
            </DropdownMenu>: null}
          </Dropdown>

      </HeroSection>
    </Container>
  )
}
