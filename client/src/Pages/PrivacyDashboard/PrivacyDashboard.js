import Nav from "../../components/Nav/Nav"
import MicrosoftNav from "../../components/MicrosoftNav/MicrosoftNav"
import EventInfo from "../../components/EventInfo/EventInfo";
import Dashboard from "../../components/Dashboard/Dashboard";
import './PrivacyDashboard.scss'

const PrivacyDashboard = () => {
    return (
        <>
        <MicrosoftNav />
        <Nav />
        <div className="dasboard__container">
            <Dashboard/>
            <EventInfo />
        </div>
        </>
    )
}

export default PrivacyDashboard;