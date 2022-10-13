import { FiAirplay, FiColumns, FiCreditCard, FiHome, FiType } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '../Style/Button';

const SidebarLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.mode === 'dark' ? theme.colors.light : theme.colors.dark};
  ${({space}) => space === 'p1' && css`
    padding: 1rem;
  `}
`
const margin = {
  marginRight: '.5rem',
}

export const SideBarMenu = ({open, setOpen }) => {
  return (
    <>
        <SidebarLink space="p1" to="/" onClick={() => setOpen(false)}><FiHome style={margin}/>Home</SidebarLink>
        <SidebarLink space="p1" to="/typography-component" onClick={() => setOpen(false)}><FiType style={margin}/>Typography</SidebarLink>
        <SidebarLink space="p1" to="/button-component" onClick={() => setOpen(false)}><FiAirplay style={margin}/>Button Component</SidebarLink>
        <SidebarLink space="p1" to="/card-component" onClick={() => setOpen(false)}><FiCreditCard style={margin}/>Card Component</SidebarLink>
        <SidebarLink space="p1" to="/column-component" onClick={() => setOpen(false)}><FiColumns style={margin}/>Complex Column Component</SidebarLink>
    </>
  )
}

export const NavBarMenu = ({open, setOpen }) => {
  const StyledButton = styled(Button)`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
  `
  return (
    <>
        <SidebarLink to="/"><StyledButton onClick={() => setOpen(false)}><FiHome style={margin}/>Home</StyledButton></SidebarLink>
        <SidebarLink to="/typography-component"><StyledButton onClick={() => setOpen(false)}><FiType style={margin}/>Typography</StyledButton></SidebarLink>
        <SidebarLink to="/button-component"><StyledButton onClick={() => setOpen(false)}><FiAirplay style={margin}/>Button Component</StyledButton></SidebarLink>
        <SidebarLink to="/card-component"><StyledButton onClick={() => setOpen(false)}><FiCreditCard style={margin}/>Card Component</StyledButton></SidebarLink>
        <SidebarLink to="/column-component"><StyledButton onClick={() => setOpen(false)}><FiColumns style={margin}/>Complex Column Component</StyledButton></SidebarLink>
    </>
  )
}