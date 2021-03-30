import React from 'react'
import './app.css'
import Feed from './feed'
import Slider from './slider'
import Widget from './widget'
const App = () => {
    return (
        <div className='app'>
            <Slider/>
            <Feed/>
            <Widget/>
        </div>
    )
}

export default App;
