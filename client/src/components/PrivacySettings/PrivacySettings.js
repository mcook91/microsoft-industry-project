import { Link } from 'react-router-dom';
import './PrivacySettings.scss';
import xbox from '../../Assets/Microsoft Subsidaries Logos/xbox.png'
import teams from '../../Assets/Microsoft Subsidaries Logos/teams.png'
import skype from '../../Assets/Microsoft Subsidaries Logos/skype.png'
import mojang from '../../Assets/Microsoft Subsidaries Logos/mojang.png'
import linkedin from '../../Assets/Microsoft Subsidaries Logos/linkedin.png'
import github from '../../Assets/Microsoft Subsidaries Logos/github.png'

const privacySettings = () => {
    return (
        <>
        <div className='privacy'>
            <h2 className='privacy__title'>Privacy Settings</h2>
            <nav className='privacy__nav'>
                <div className='privacy__left'>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={xbox} alt='xbox' />
                        <h3 className="privacy__text">Go to your Xbox to change privacy settings</h3> 
                    </div>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={teams} alt='teams'/>
                        <Link className="privacy__text--link" to='#'>
                        <h3 className="privacy__text">Go to your teams to change privacy settings</h3>
                        </Link>
                    </div>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={linkedin} alt='linkedin'/>
                        <h3 className="privacy__text">Go to your Linkedin to change privacy settings</h3>
                    </div>
                </div>
                <div className='privacy__right'>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={skype} alt='skype'/>
                        <h3 className="privacy__text">Go to your Skype to change privacy settings</h3>
                    </div>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={github} alt='github' />
                        <h3 className="privacy__text">Go to your github to change privacy settings</h3>
                    </div>
                    <div className='privacy__links'>
                        <img className="privacy__logos" src={mojang} alt='mohjang'/>
                        <h3 className="privacy__text">Go to your mojang to change your privacy settings</h3> 
                    </div>
                </div> 
            </nav>

        </div>
        </>
    )
}

export default privacySettings;
