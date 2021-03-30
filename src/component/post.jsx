import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { v4 as uuidv4 } from 'uuid';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import './post.css'
import { useRef } from 'react';
const Post = ({
    avator,
    userName,
    smallName,
    time,
    text,
    img,
    love

}) => {
   

  function imgRender(imgx){
    if(imgx.length===1){
       return imgx.map((sig,index)=><img key={index} src={sig} alt='' />)
    }else if(imgx.length===2){
       return imgx.map((sig,index)=><img key={index} src={sig} alt='' style={{width:'44%',padding:'2px 13px'}} />)
    }else{
       return imgx.map((sig,index)=><img key={index} src={sig} alt='' style={{height:'50%',width:'44%',padding:'2px 13px'}} />)
    }
  }
    return (
        <div  className='post'>
            <div className="post__avator">
                <Avatar src={avator}/>
            </div>
            <div className="post__details">
                <div className="post__creator">
                    <p className='post__creator--username'>{userName}</p>
                    <p className='post__creator--smallName'>{smallName}</p>
                    <p className='post__creator--time'>{time}</p>
                </div>
                <div className="post__text">
                    <p>{text}</p>
                   <div className="post__img">
                  
                   {/* {img.length===2?img.map((sig,index)=><img key={index} src={sig} alt='' style={{width:'44%',padding:'2px 13px'}} />)
                   :img.map((sig,index)=><img key={index} src={sig} alt='' style={{height:'50%',width:'44%',padding:'2px 13px'}} />)
                   } */}
                   {
                       imgRender(img)
                   }
                 
                   </div>
                </div>
                <div className="post__footer">
                    <div className='post__footer--comment'>
                <ChatBubbleOutlineOutlinedIcon />
                <p>2</p>
                </div>
                <div className='post__footer--repeat'>
                 <RepeatIcon />
                 <p>1</p>
                </div>
                <div   className='post__footer--love'>
                <FavoriteBorderIcon style={{color:'red'}} />
                <p style={{color:'red'}}>{love}</p>
                </div>
               
                <PublishIcon  className='post__footer--publish'/>
            </div>
            </div>
        </div>
        
    )
}

export default Post;
