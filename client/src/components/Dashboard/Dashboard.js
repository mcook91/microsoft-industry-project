import teamsImage from '../../assets/logos/teams_logo.png';
import textImage from '../../assets/logos/Chat.svg'
import calendarImage from '../../assets/logos/Calendar.svg';
import uploadImage from '../../assets/logos/file_upload.svg';
import './Dashboard.scss';

const Dashboard = () => {

    return(
        <div className="dashboard">
            <div className="dashboard__header">
                <h1 className="header__title">Privacy dashboard</h1>
                <div className="header__teams">
                    <div className="header__image-container"><img src={teamsImage} alt="teams-logo" className="header__image"/></div>
                    <a className="header__link" href="">Microsoft Teams</a>
                </div>
            </div>
            <div className="dashboard__explore">
                <h2 className="explore__title">Explore your data</h2>
                <div className="explore__item-list">
                    <div className="explore__item">
                        <div className="explore__image-container"><img src={textImage} alt="text-icon" className="explore__image"/></div>
                        <div className="explore__text">Conversations</div>
                    </div>
                    <div className="explore__item">
                        <div className="explore__image-container"><img src={calendarImage} alt="calendar-icon" className="explore__image"/></div>
                        <div className="explore__text">Calendar Events</div>
                    </div>
                    <div className="explore__item">
                        <div className="explore__image-container"><img src={uploadImage} alt="upload-icon" className="explore__image"/></div>
                        <div className="explore__text">Files</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;