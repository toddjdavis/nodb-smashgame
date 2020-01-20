import React from 'react'
import Library from './Library'
import CurrentCharacter from './CurrentCharacter'
import Random from './Random'

function DivHolder(){
    return (
        <div>
            <Library />
            <CurrentCharacter />
            <Random />
        </div>
    )
}

export default DivHolder