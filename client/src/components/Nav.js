
import { Link } from '@reach/router';
const isActive = ({ isCurrent }) => (isCurrent ? { className: 'active' } : null);

const NavLink = props => <Link getProps={isActive} {...props} />;

const Nav = () => (
    <div>
        <Link to="/">
            <div>Profil</div>
        </Link>
        <NavLink to="playing">
            <div>Playing</div>
        </NavLink>
    </div>
);

export default Nav;
