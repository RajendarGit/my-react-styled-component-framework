import { Container } from '../Style/Container'
import { Logo } from '../Style/Logo'
import { Navigation, NavBar, NavItems, NavList, MobileMenu } from '../Style/Navigation'
import { FiMaximize, FiMenu } from "react-icons/fi";
import { Sidebar } from './Sidebar';
import { useState } from 'react';
import { NavBarMenu } from './MenuContent';

const capture = {
  display: 'flex',
  alignItems: 'center',
}

const space = {
  marginRight: '.5rem',
}

export const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
    <NavBar variant="primary">
        <Container>
          <Navigation items="items">
            <Logo>
                <div style={capture}><FiMaximize style={space}/>BOX</div>
                <div>Framework</div>
            </Logo>
            <MobileMenu color="white" hide="lg" onClick={(e) => setOpen(true)}>
              <FiMenu/>
            </MobileMenu>
            <NavItems hide="hide" show="lg">
                <NavList>
                  <NavBarMenu/>
                </NavList>
            </NavItems>
          </Navigation>
        </Container>
    </NavBar>
    <Sidebar open={open} setOpen={setOpen}/>
    </>
  )
}
