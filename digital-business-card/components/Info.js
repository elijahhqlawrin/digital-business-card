import React from 'react'

export default function Info() {
    return (
        <header>
            <img src='./images/elijah-smile.jpeg' alt='portrait of Elijah Lawrin'/>
            <div className='info-container'>
                <h1>Elijah Lawrin</h1>
                <h2>Frontend Developer</h2>
                <p className='website'><a href='#'>Website coming soon...</a></p>
                <div className='btn-container'>
                    <button className='email-btn'>
                        <img className='email-icon' src='./icons/mail-icon.png' alt='mail icon'/>
                        <p>Email</p>
                    </button>
                    <button className='linkedin-btn'>
                        <img className='linkedin-icon' src='./icons/linkedin-icon-white.png' alt='Linkedin icon'/>
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </header>
    )
}