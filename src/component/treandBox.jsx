import React from 'react'
import './treandBox.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const TreandBox = ({topic,name,tweet}) => {
    return (
        <div className="treand-box">
               <div className='treand-box__wrapper'>
               <div className="treand__details">
               <p style={{opacity:'.7'}}>{topic}</p>
                <p style={{fontWeight:'bolder', color: 'white'}}>{name}</p>
                <p style={{opacity:'.7'}}>{tweet}</p>
                </div>
                <div className="treand__more--icon">
                    <MoreHorizIcon/>
                </div>
               </div>
            </div>
    )
}

export default TreandBox;
