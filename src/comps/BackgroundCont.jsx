import React from 'react'
import './css/BackgroundCont.css'
import PulsatingDots from './PulsatingDots'

const BackgroundCont = () => {
    return (
        <>
            <PulsatingDots />
            <div className='profile-pic' />
            <div className='frosted-holder'>
                <div className='filler-conts'></div>
                <div className='filler-conts'></div>
                <div className='filler-conts'></div>
                <div className='filler-conts'></div>
                <div className='filler-conts'></div>
                <div className='filler-conts'></div>
            </div>
            <div className='blur-footer' />
        </>
    )
}

export default BackgroundCont
