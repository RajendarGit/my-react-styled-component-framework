import { Container } from '../Style/Container'
import { Logo } from '../Style/Logo'
import { Navigation, NavBar, NavItems, NavList, MobileMenu } from '../Style/Navigation'
import { FiMaximize, FiMenu } from "react-icons/fi";
import { Sidebar } from './Sidebar';
import { useState } from 'react';
import { MenuContent } from './MenuContent';

const capture = {
  display: 'flex',
  alignItems: 'center',
}

const space = {
  marginRight: '.5rem',
}

export const Navbar = ({navmenu}) => {

  const [open, setOpen] = useState(false);
  return (
    <>
    <NavBar purple>
        <Container>
          <Navigation items>
            <Logo>
                <div style={capture}><FiMaximize style={space}/>BOX</div>
                <div>Framework</div>
            </Logo>
            <MobileMenu white hideMD onClick={(e) => setOpen(true)}>
              <FiMenu/>
            </MobileMenu>
            <NavItems hide showMD>
                <NavList>
                  <MenuContent navmenu={navmenu}/>
                </NavList>
            </NavItems>
          </Navigation>
        </Container>
    </NavBar>
    <Sidebar open={open} setOpen={setOpen}/>
    </>
  )
}
