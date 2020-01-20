import React, {Component} from 'react'
import CurrentCharacter from './CurrentCharacter'
import Library from "./Library";
import Random from './Random'
import Header from './Header'
import axios from 'axios'

class Characters extends Component {
    constructor(){
        super()
        this.state ={
            characterArr:[],
            challengerArr: {},
            currentPlayerLevel: 1

        }    
        this.getChallenger = this.getChallenger.bind(this)
        this.checkPowerLevel = this.checkPowerLevel.bind(this)
        this.fight = this.fight.bind(this)
    }

    componentDidMount(){
        this.getChallenger()
        axios.get('/api/smasher').then( res => {
            console.log(res)
            this.setState({characterArr: res.data})
        })
    }
    getChallenger() {
        axios.get('/api/randomsmasher').then(res => {
            this.setState({challengerArr: res.data})
        }).catch(err => console.log(err))
    }
    checkPowerLevel(lvl){
        this.setState({currentPlayerLevel: lvl})
    }
    fight(){
        if(this.state.currentPlayerLevel >= this.state.challengerArr.powerlvl){
            axios.post('/api/defeatsmasher').then(res => {
                this.setState({characterArr: res.data})
            })
            this.setState({currentPlayerLevel: this.state.currentPlayerLevel +1})
        }else if(this.state.currentPlayerLevel < 5){
            this.setState({currentPlayerLevel: this.state.currentPlayerLevel + 1})
        }
    }
    
    
    


    render(){
        // this.state.challengerArr.splice(1)
        console.log(this.state.challengerArr)
        // const mappedCharacters = this.state.characterArr.map((smasher, i) => {})
        return(
            <div>
                <Header level={this.state.currentPlayerLevel}/>
                <div className='holder'>
                    <Library playableCharacters={this.state.characterArr}/>
                    <CurrentCharacter />
                    <Random challenger={this.state.challengerArr} getFn={this.getChallenger} fightFn={this.fight}/>
                   
                </div>
            </div>
        )
    }
}

export default Characters