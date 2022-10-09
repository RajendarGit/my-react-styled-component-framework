import { FiAirplay, FiColumns, FiCreditCard, FiHome, FiType } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 1rem;
  align-items: center;
  color: ${({theme}) => theme.mode === 'dark' ? theme.colors.light : theme.colors.dark};
`

const margin = {
  marginRight: '.5rem',
}

export const MenuContent = ({open, setOpen }) => {
  return (
    <>
        <SidebarLink to="/" onClick={() => setOpen(false)}><FiHome style={margin}/>Home</SidebarLink>
        <SidebarLink to="/typography-component" onClick={() => setOpen(false)}><FiType style={margin}/>Typography</SidebarLink>
        <SidebarLink to="/button-component" onClick={() => setOpen(false)}><FiAirplay style={margin}/>Button Component</SidebarLink>
        <SidebarLink to="/card-component" onClick={() => setOpen(false)}><FiCreditCard style={margin}/>Card Component</SidebarLink>
        <SidebarLink to="/column-component" onClick={() => setOpen(false)}><FiColumns style={margin}/>Complex Column Component</SidebarLink>
    </>
  )
}
