import microsoftLogo from "../../Assets/Microsoft logo/Microsoft Logo V2.png"
import "./MicrosoftNav.scss"
const MicrosoftNav = () => {
    return (
        <div className="microsoft">
            <img className="microsoft__logo"src={microsoftLogo} alt="microsoft logo" />
            <nav className="microsoft__nav">
                <div className="microsoft__links">
                <h2>Store</h2>
                </div>
                <div className="microsoft__links">
                <h2>Products</h2>
                </div>
                <div className="microsoft__links">
                <h2>Support</h2>
                </div>
            </nav>
        </div>
    )
}

export default MicrosoftNav;