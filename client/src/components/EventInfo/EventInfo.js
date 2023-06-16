import React, { useState } from 'react'
import EventCard from '../EventCard/EventCard'
import oliveGardenImg from '../../assets/images/olive_garden.jpg'
import genericImg from '../../assets/images/xbox.jpg'
import './EventInfo.scss'

const EventInfo = () => {
    const array = [
        {
            eventName: "Summer Music Festival",
            date: "2023-07-15",
            eventInfo: "Join us for a day filled with live music performances from top artists.",
            locationInfo: "Central Park, New York City"
        },
        {
            eventName: "Tech Conference 2023",
            date: "2023-09-20",
            eventInfo: "Discover the latest trends and innovations in the tech industry.",
            locationInfo: "Convention Center, San Francisco"
        },
        {
            eventName: "Charity Gala Dinner",
            date: "2023-11-08",
            eventInfo: "An elegant evening to support local charities and make a difference in our community.",
            locationInfo: "Grand Ballroom, Hilton Hotel, London"
        }
    ]


    const [activeImg, setActiveImg] = useState(true)


    return (
        <div className='EventInfo'>
            <div className='EventInfo__container'>
                <p className='EventInfo__info'>The info that appears on this page represents the most relevant personal data that we save with your  Microsoft account to help make your experience with our products and services more personalized, useful, and fun. You can change what data is collected by adjusting the privacy settings on your device or browser at any time.</p>
                <img src={activeImg ? oliveGardenImg : genericImg} alt='' className='EventInfo__image' />
            </div>
            <h2 className='EventInfo__title'>Today</h2>
            {array.map((card, i) => {
                return <EventCard key={i} card={card} setActiveImg={setActiveImg}  />
            })}
        </div>
    )
}

export default EventInfo