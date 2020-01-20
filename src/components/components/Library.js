import React from 'react'


function Library(props) {
        let library = props.playableCharacters.map((el)=>{
            return(
                <div className='stored'>
                    <img className='storedCharacter' src={el.img}/>
                    <div>
                        <h4>{el.name}</h4>
                    </div>
                </div>
            )
        })
        return (
            <div >
                <div className='library'>
                {library}
                </div>
            </div>
        )
    }

export default Library