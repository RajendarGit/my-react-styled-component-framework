import { Container } from '../Style/Container'
import { Logo } from '../Style/Logo'
import { Navigation, NavBar, NavItems, NavList } from '../Style/Navigation'

export const Navbar = () => {
  return (
    <NavBar>
        <Container>
          <Navigation items>
            <Logo>Logo here</Logo>
            <NavItems hide showMD>
                <NavList>Home</NavList>
                <NavList>Home</NavList>
                <NavList>Home</NavList>
                <NavList>Home</NavList>
            </NavItems>
          </Navigation>
        </Container>
    </NavBar>
  )
}
