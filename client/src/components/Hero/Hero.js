import './Hero.scss'
import heroImg from '../../assets/images/hero.svg';

const Hero = () => {

    return(
        <div className="hero">
        <div className="hero__content">
            <h1 className="hero__heading">Stay in control of your privacy</h1>
            <p className="hero__text">Sign in to manage your data</p>
            <button className="hero__button">SIGN IN WITH MICROSOFT</button>
        </div>
        <div className="hero__image-container"><img src={heroImg} alt="hero" className="hero__image"/></div>
        </div>
    );
}

export default Hero;