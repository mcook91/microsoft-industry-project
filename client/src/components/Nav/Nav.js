import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <h2 className="nav__title">Microsoft account</h2>
            <ul className="nav__list">
                <li className="nav__link">
                    <NavLink>
                        Your info
                    </NavLink>
                </li>
                <li className="nav__link">
                    <NavLink>
                        Privacy
                    </NavLink>
                </li>
                <li className="nav__link">
                    <NavLink>
                        Security
                    </NavLink>
                </li>
                <li className="nav__link">
                    <NavLink>
                        Rewards
                    </NavLink>
                </li>
                <li className="nav__link">
                    <NavLink>
                        Payment & Billing
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav