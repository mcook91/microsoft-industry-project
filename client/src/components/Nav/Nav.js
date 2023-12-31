import { NavLink } from 'react-router-dom';
import accountSymbol from '../../assets/logos/microsoft_logo-account.svg'
import './Nav.scss';

const Nav = ({pageName}) => {
    return (
        <nav className="nav">
            <div className='nav__symbol-container'>
                <img src={accountSymbol} alt='account symbol' className='nav__symbol'/>
            </div>
            <h2 className="nav__title">{pageName ? pageName : 'Microsoft Account'}</h2>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link">
                        Your info
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link">
                        Privacy
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link">
                        Security
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link">
                        Rewards
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link">
                        Payment & Billing
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav