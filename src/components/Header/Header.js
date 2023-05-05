import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">Shopping Cart</Logo>
      <NavWrapper>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/shop">Shop</StyledNavLink>
        <Cart />
      </NavWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background: black;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const NavWrapper = styled.div`
  display: flex;
`;

const Logo = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding-left: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:first-child {
    margin-right: 1rem;
  }
`;

export default Header;
