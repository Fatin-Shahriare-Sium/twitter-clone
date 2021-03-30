import React from 'react'
import './signal.slider.css'
const SignalSlider = ({Icon,detail,active}) => {
    return (
        <div className={active?'signal-slider signal-slider__active':'signal-slider'}>
            <Icon className='signal-slider__icon'/>
            <p style={{marginLeft:'11%'}}>{detail}</p>
        </div>
    )
}

export default SignalSlider
