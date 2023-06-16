import deleteIcon from '../../assets/icons/Delete.svg'
import deleteGreyIcon from '../../assets/icons/DeleteGrey.svg'
import locationIcon from '../../assets/icons/Location.svg'
import React, { useState } from 'react'
import './EventCard.scss'

const EventCard = ( {card, setActiveImg}) => {
    const [active, setActive] = useState(true)
    const onClickHandler = (e) => {
        e.preventDefault()
        if (active) {
            setActive(false)
            setActiveImg(false)
        } else {
            setActive(true)
            setActiveImg(true)
        }
    }

    return (
        <div className='eventcard'>
            <div className='eventcard__container-header'>
                <h3 className='eventcard__title'>{card.eventName}</h3>
                <p className='eventcard__date'>{card.date}</p>
            </div>
            <div className='eventcard__container-card'>
                <div className='eventcard__container'>
                    <div className='eventcard__container-info'>
                        <h4 className='eventcard__title-sub'>Title</h4>
                        <p className='eventcard__info'>{card.eventInfo}</p>
                    </div>
                    <img src={deleteIcon} alt='Delete Icon' className='eventcard__delete' />
                </div>
                <div className='eventcard__container'>
                    <div className='eventcard__container-info'>
                        <h4 className='eventcard__title-sub'>Location</h4>
                        <div className='eventcard__container-info eventcard__container-sub'>
                            <img src={locationIcon} alt='Location Icon' className='eventcard__location' />
                            <p className='eventcard__info'>{active ? card.locationInfo : '---'}</p>
                        </div>
                    </div>
                    <img onClick={onClickHandler} src={active ? deleteIcon : deleteGreyIcon} alt='Delete Icon' className='eventcard__delete' />
                </div>
            </div>
            <div className='eventcard__footer-container'>
                <p className='eventcard__footer'>View Details</p>
                <p className='eventcard__footer'>Delete All</p>
            </div>
        </div>
    )
}

export default EventCard