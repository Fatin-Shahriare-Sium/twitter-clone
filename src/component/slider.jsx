import React from 'react'
import './slider.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import SignalSlider from './signal.slider';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
const Slider = () => {
    return (
        <div className='slider'>
           <TwitterIcon className='slider-twitter' />
           <SignalSlider active={true} Icon={HomeIcon} detail='Home'/>
           <SignalSlider Icon={SearchIcon} detail='Explore' />
           <SignalSlider Icon={NotificationsActiveIcon} detail='Notificasions'/>
           <SignalSlider Icon={EmailIcon} detail='Message'/>
           <SignalSlider Icon={BookmarkIcon} detail='Bookmarks'/>
           <SignalSlider Icon={ListAltSharpIcon} detail='Lists' />
           <SignalSlider Icon={PersonIcon} detail='Profile'/>
           <SignalSlider Icon={MoreHorizIcon} detail='More'/>
           <button className='slider__button'>Tweet</button>
          
        </div>
    )
}

export default Slider
