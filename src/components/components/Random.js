import React, {Component} from 'react'
// import axios from 'axios'

class Random extends Component {
    constructor(){
        super()
        this.state ={
            displaySmasher: []
        }
    }

    

    render(){

        console.log(this.props.challenger)
        const {challenger} = this.props
        if(challenger){
            return(
                <div>
                    <div className='fighter'>
                        <img src={challenger.img} className='challenger'/>
                        <div className='tight'>
                            <h2>{challenger.name}</h2>
                            <h3>challenger's Level:</h3>
                            <h1>{challenger.powerlvl}</h1>
                            <div id='space'>
                                <button id='oppButton' onClick={this.props.fightFn}>Fight</button>
                                <button id='oppButton' onClick={this.props.getFn}>New Challenger</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{

            return(
                <div>

                 <button onClick={this.props.getFn}>Summon</button>
            </div>
        )
    }
    }
}

export default Random