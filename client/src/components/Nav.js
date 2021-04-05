import React from 'react'; 
import { Link } from '@reach/router';
import styled from 'styled-components/macro';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import UserProfile from './UserProfile.js'

const { colors } = theme;
const { fontSizes } = theme;

const isActive = ({ isCurrent }) => (isCurrent ? { className: 'active' } : null);

const Container = styled.nav`
  ${mixins.coverShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin-left:-40px;
  width: ${theme.navWidth};
  background-color: #000000;
  text-align: center;
  & > * {
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type:none;
`;
const MenuItem = styled.li`
  color: ${colors.lightGrey};
  font-size: 11px;
  a {   
    text-decoration: none;
    display: block;
    padding: 10% 0;
    width: 100%;
    height: 100%;
    color: lightGrey;
    font-size: ${fontSizes.md};
    &:hover,
    &:focus,
    &.active {
      color: ${colors.white};
      background-color: #282828;
      border-bottom: 5px solid ${colors.green};
    }
  }
  svg {
    width: 20px;
    height: 20px;
    color: lightGrey;
  }
`;

const MenuHeader = styled.li`
  margin-top: 20px;
  margin-bottom: 25px;
  color: ${colors.white};
  font-size: 11px;
  border-bottom: 4px solid ${colors.green};
  }
`;
const NavLink = props => <Link getProps={isActive} {...props} />;

const Nav = () => (
    <Container>
        <Menu>
            <MenuHeader>
                <UserProfile/>
            </MenuHeader>
            <MenuItem>
                <NavLink to="/">
                    <div>Accueil</div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="playing">
                    <div>Playing</div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="artists">
                    <div>Artists</div>
                </NavLink>
            </MenuItem>
            
            <MenuItem>
                <NavLink to="stats">
                    <div>Songs</div>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="profil">
                    <div>Profil</div>
                </NavLink>
            </MenuItem>
            <MenuItem>
            <a class="btn" href="https://github.com/SebastienGt/spotify-analyzer">GitHub</a>
            </MenuItem>
        </Menu>
    </Container>
);

export default Nav;
