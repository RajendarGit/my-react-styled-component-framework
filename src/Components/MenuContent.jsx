import { FiAirplay, FiCreditCard, FiHome, FiType } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '../Style/Button';

const SidebarLinkButton = styled(Button)`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  /* ${({color}) => color && css`
    color: ${({theme}) => theme.colors.dark};
  `}
  ${({navmenu}) => navmenu && css`
    color: ${({theme}) => theme.colors.light};
  `} */
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
  }
`

const linkStyle = {
  textDecoration: 'none',
}

const margin = {
  marginRight: '.5rem',
}

export const MenuContent = ({open, setOpen, color, navmenu }) => {
  return (
    <>
        <Link style={linkStyle} to="/"><SidebarLinkButton navmenu color onClick={(e) => setOpen(false)}><FiHome style={margin}/>Home</SidebarLinkButton></Link>
        <Link style={linkStyle} to="/typography-component"><SidebarLinkButton color onClick={(e) => setOpen(false)}><FiType style={margin}/>Typography</SidebarLinkButton></Link>
        <Link style={linkStyle} to="/button-component"><SidebarLinkButton color onClick={(e) => setOpen(false)}><FiAirplay style={margin}/>Button Component</SidebarLinkButton></Link>
        <Link style={linkStyle} to="/card-component"><SidebarLinkButton color onClick={(e) => setOpen(false)}><FiCreditCard style={margin}/>Card Component</SidebarLinkButton></Link>
    </>
  )
}
