import React, { useState } from 'react'
import './widget.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import TreandBox from './treandBox';
const Widget = () => {
    let [show,setShow]=useState(false)
    let [giveBorder,setgiveBorder]=useState(false)
    let dataOfWidget=[{
        topic:'Politics · Trending',
        name:'Bangladesh',
        tweet:'201K Tweets'
    },

    {
        topic:'Trending in Bangladesh',
        name:'Sheikh Hasina',
        tweet:'25.3K Tweets'
    },
    {
        topic:'Allah is Almighty',
        name:'Alhamdulillah',
        tweet:'2500M Tweets'
    },
    {
        topic:' Trending in Bangladesh',
        name:'#অলরাউন্ডার_লিসা_ডে',
        tweet:'4,642 Tweets'
    },
    {
        topic:' Trending in Bangladesh',
        name:'#অলরাউন্ডার_লিসা_ডে',
        tweet:'4,642 Tweets'
    },
    {
        topic:' Trending in Bangladesh',
        name:'#Amazon',
        tweet:'30.8K Tweets'
    },
    {
        topic:'Alhamdulillah,i have abled to do it',
        name:'sium',
        tweet:'17M Tweets'
    }
    ]
    let handleInput=(e)=>{
        e.preventDefault()
        setgiveBorder(true)
        
    }
    let handleInputX=(e)=>{
        if(e.target.value!==''){
            console.log('ssss');
            setShow(true)
        }else{
            setShow(false)
        }
    }
    return (
        <div className='widget'>
            <div className={giveBorder?'widget__search border__search':'widget__search'}>
                <SearchOutlinedIcon className='search'/>
                <input onChange={(event)=>handleInputX(event)} onClick={(event)=>handleInput(event)} placeholder='Search Twitter'/>
                <CloseIcon  style={show?{display:'block',color:' #0586c6 ',marginRight:'3%'}:{visibility:'hidden'}} />
            </div>
            <div className="widget__treands-for-you">
            <div className="treand__header">
                <p>Trends for you</p>
                <SettingsIcon className='settings'/>
            </div>
           {
               dataOfWidget.map((sig,index) =>
                <TreandBox key={index} name={sig.name} topic={sig.topic} tweet={sig.tweet}/>
               )
           }
            </div>
        </div>
    )
}

export default Widget;
