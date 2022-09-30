import { Container } from '../Style/Container'
import { Logo } from '../Style/Logo'
import { Navigation, NavigationWrapper, NavItems, NavList } from '../Style/Navigation'

export const Navbar = () => {
  return (
    <NavigationWrapper>
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
    </NavigationWrapper>
  )
}
