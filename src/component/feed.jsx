
import React, { useEffect, useReducer, useState } from 'react'
import InputBox from './feed-inputBox'
import './feed.css'
import Post from './post'
import db from './firebase.js'
import{v4} from 'uuid'
const Feed = () => {
    
    let Actions={
        SET_DATA:'set-data',
    }

    let reducer=(state,action)=>{
        if(action.type===Actions.SET_DATA){
            return{
                ...state,
                data:action.payload.tt,
                loading:action.payload.loading
            }
        }
        return state
    }
  
    let [state,dispatch]=useReducer(reducer,{loading:true,data:[]})

    useEffect(()=>{
 
        db.collection('post').onSnapshot(snapShot=>{
            let getData=snapShot.docs.map(doc=>doc.data());
            console.log(getData);
            dispatch({type:Actions.SET_DATA,payload:{tt:getData,loading:false}})
                
              })
      
        
    },[])
    return (
        <div className='feed'>
            <div className="feed__home">
                <p>Home</p>
            </div>
            <InputBox/>
        {
            state.loading?'':state.data.map((sig,index)=><Post key={index} avator={sig.avator}  userName={sig.userName} img={sig.img} love={sig.love} smallName={sig.smallName} time={5} text={sig.text}/>)
        }
            
           
            </div> 
        
    )
}

export default Feed;
//