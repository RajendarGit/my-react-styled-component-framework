import React, { useState } from 'react'
import { Box } from '../Style/Box'
import { Button } from '../Style/Button'
import { Container } from '../Style/Container'
import { Dropdown, DropdownMenu, DropdownMenuLink } from '../Style/Dropdown'
import { Body1, Head1, Head4 } from '../Style/Typography'

export const ButtonComponent = () => {
const [showDropdown, setShowDropDown] = useState(false);
const dropdownToggle = () => setShowDropDown(!showDropdown);
  return (
    <Container>
      <Head1>Button Component</Head1>
      <Body1>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.
      </Body1>
      <Box>
        <Head4>Button Color Variations</Head4>
        <Button>Default Button</Button>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="danger">Danger Button</Button>
      </Box>
      <br/>
      <Box>
        <Head4>Button Color Variations</Head4>
        <Button radius="sm">Curved Button Type 1</Button>
        <Button radius="md">Curved Button Type 2</Button>
        <Button radius="lg">Curved Button Type 3</Button>
      </Box>
      <br/>
      <Box>
        <Head4>Dropdown Button</Head4>
        <Dropdown>
          <Button onClick={dropdownToggle} primary>Dropdown Button</Button>
          {showDropdown ? <DropdownMenu Menu>
            <DropdownMenuLink onClick={dropdownToggle}>List One</DropdownMenuLink>
            <DropdownMenuLink onClick={dropdownToggle}>List Two</DropdownMenuLink>
            <DropdownMenuLink onClick={dropdownToggle}>List Three</DropdownMenuLink>
          </DropdownMenu>: null}
        </Dropdown>
      </Box>
    </Container>
  )
}
