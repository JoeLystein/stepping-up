import React from 'react'
import Photo1 from '../../assets/photo1.jpg'; 

function Events() {
    return (
        <div>
            Events page
            <p>Upcoming activities:</p>
            <ul>
                <li>Bowling Spetember 12, 2021s</li>
                <li>Cookout October 20, 2021</li>
                <li>Agapee November 21, 2021</li>
                <li>Gift Sharing December 24th, 2021</li>
            </ul>
            <div>
                Our Photo Galery
                <img src={Photo1} alt="Youth Talk Show Episode 1"/>
                <img src="" alt="Youth Talk Show Episode 2"/>
            </div>
        </div>
    )
}

export default Events
