import React from 'react'

function Header(props){
    return(
        <div className='theHeader'>
            <h1>It's Time to Smash</h1>
            <h1>Power Level: {props.level}</h1>
            <h1>Welcome to the Fight</h1>
        </div>
    )
}

export default Header