import React, { useReducer, useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import ImageSharpIcon from '@material-ui/icons/ImageSharp';
import GifIcon from '@material-ui/icons/Gif';
import CircularProgress from '@material-ui/core/CircularProgress'
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventIcon from '@material-ui/icons/Event';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import db from './firebase.js'
import {storage} from './firebase.js'
import './feed-inputBox.css'
import {v4} from 'uuid'
const InputBox = () => {
    let uniqid=v4()
    let Actions={
        SET_IMGSRC:'img-src',
        SET_Empty:'empty'
    }
    let reducer=(state,action)=>{
      
        if(action.type===Actions.SET_IMGSRC){
            let arr=[...state.img,action.srcx]
          
            return{
                ...state,
                img:arr
            }
        }else if(action.type===Actions.SET_Empty){
            return{
                ...state,
                img:[]
            }
        }
        return state
    }

    let [state,dispatch]=useReducer(reducer,{img:[]})
   
    let [hover,setHover]=useState(false)
    let [length,setLength]=useState(0)
    let handleFile=(e)=>{
        e.preventDefault()
        
      let chobi= document.getElementById('imgx')
      chobi.style.display='flex'
      let file= e.target.files[0]
     
      dispatch({type:Actions.SET_IMGSRC,srcx:file})
      let img=document.createElement('img')
      img.src=URL.createObjectURL(file);
      let allImg= chobi.children;
       console.log(chobi);
       //div creating
       let imgWrapper=document.createElement('div')
       imgWrapper.className='image-wrapper'
       //btn creating
       let btn=document.createElement('button')
       btn.className='btn'
       btn.innerHTML='&#x2715'
       btn.addEventListener('click',()=>{
           imgWrapper.remove()
           if(chobi.childElementCount===1){
            ;[...allImg].forEach(sig=>{sig.style.width='100%';sig.style.height='290px'})
            
            }else if(chobi.childElementCount===0){
                chobi.style.display='none'

            }else if(chobi.childElementCount===2){
    
                ;[...allImg].forEach(sig=>{sig.style.width='44%';sig.style.height='290px'})
            }
            else{
                
                ;[...allImg].forEach(sig=>{sig.style.width='44%';sig.style.height='50%'})
                }
       })

       //btn2 creating
       let btn2=document.createElement('button')
       btn2.className='btn2'
       btn2.innerText='Edit'
        //DIV CONATING BTN
        let divx=document.createElement('div')
        divx.className='image-controller'
        // divx.innerText='Allah is Almighty'
        divx.appendChild(btn)
        divx.appendChild(btn2)
        
        imgWrapper.appendChild(img)
        imgWrapper.appendChild(divx)
        chobi.insertAdjacentElement('beforeend',imgWrapper)
       //resizing img
        if(chobi.childElementCount===1){
        ;[...allImg].forEach(sig=>sig.style.width='100%')
        
        }else if(chobi.childElementCount===2){

            ;[...allImg].forEach(sig=>sig.style.width='44%')
        }
        else{
            
            ;[...allImg].forEach(sig=>{sig.style.width='44%';sig.style.height='50%'})
            }
    }
    
    let handleInput=(e)=>{
        e.preventDefault()
        if(e.target.value.length<=151){
            setLength(e.target.value.length)
        }else{
            setLength(100)
        }
       
    }    
    let handleForm=(e)=>{
        e.preventDefault()
        console.log('stateimg when tweet button press',state.img);
        let text=e.target[0].value
        let urlContainer=[]
       function uploadFile (index,fileContainerLength){
            let uploadTask=storage.ref(`post/img/${uniqid}/${state.img[index].name}`).put(state.img[index])
            uploadTask.on('state_changed',(snapShot)=>{
    
            },()=>{
    
            }, ()=>{
                
                uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                        urlContainer=[...urlContainer,url]
                        console.log('urlContainer',urlContainer);
                    console.log('index',index);
                   
                        if(urlContainer.length===state.img.length){
                            console.log('stateimg length',state.img.length);
                            
                                console.log('urlContainer in condition',urlContainer);
                            
                            
                            db.collection('post').add({
                                       avator:'https://pbs.twimg.com/profile_images/1325525438714712064/hIMAnqtB_400x400.jpg',
                                       userName:'fahim',
                                       smallName:'@fahim_shawon',
                                       time:'1s',
                                       text:text,
                                       img:urlContainer,
                                       love:0
                                   })
                          }
                })
               e.target.value=''
                
            })
            

        }

        for(let i=0;i<state.img.length;i++){
            console.log(i);
                uploadFile(i,state.img.length)
            }
            // dispatch({type:Actions.SET_Empty})
     
    }
    console.log('rerender');
    
    return (
        <>
             <form onSubmit={(event)=>handleForm(event)} className="feed__input">
               <div className="feed__input--header">
               <Avatar style={{marginRight:'3%'}} src='https://pbs.twimg.com/profile_images/1325525438714712064/hIMAnqtB_400x400.jpg'/>
                <textarea onChange={(event)=>handleInput(event)} placeholder="what's happenings"/>
               </div>
               
               <div id='imgx'  className='show__image'>

               </div>
             
              
              
               
               <div className="feed__input--controller">
                   <div className="feed__input--con-icon">
                   <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  className='feed__input--controller--imageIcon'>
                      <input onChange={(event)=>handleFile(event)}  type='file'/>
                  <ImageSharpIcon className={hover&&'feed__input--controller--hover'} style={{marginRight:'3%'}}/>
                  </div>
                <GifIcon/>
                <PollIcon className='poll'/>
                <SentimentSatisfiedOutlinedIcon/>
                <EventIcon/>
                   </div>
                  
                <div className="feed__input--con-btn">
                <CircularProgress variant="determinate" style={length>150?{color:'red'}:{color:'var(--twitter-color)'}} value={length/1.5} />
                <button  disabled={length>150&&true} style={length>150?{opacity:'.5',cursor:'auto'}:{}} type='submit'>Tweet</button>
                </div>
               </div>
               </form>
            
        </>
    )
}

export default InputBox;
