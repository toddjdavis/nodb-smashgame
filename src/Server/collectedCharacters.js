const smashersCollected = []
const smashers = require('./data.json')
let id = 0
let challenger = {}


module.exports = {
    getSmasher: (req, res) => {
        res.status(200).send(smashers)
    },
    getRandomSmasher: (req, res) => {
        const randomSmasher = Math.ceil(Math.random() *  smashers.length)
        // console.log(randomSmasher)
        for(let el of smashers){
            const {id, name,img} = el
            if(+id === randomSmasher){
                challenger = {id, name, img}
                challenger.powerlvl = Math.ceil(Math.random() * 10)
            }
        }
        res.status(200).send(challenger)
    },
    
    getMySmashers: (req, res) => {
        res.status(200).send(smashersCollected)
    },
    createSmasher: (req, res) => {
        // console.log('req.body', req.body)
        const {img, name} = req.body
        const newSmasher = {
            id,
            name,
            powerlvl: 3, 
            img,
        }
        
        smashersCollected.push(newSmasher)
        res.status(200).send(newSmasher)
    },
    updateName: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        // const {powerlvl} = req.body
        const index = smashersCollected.findIndex(el => el.id === +id)
        smashersCollected[index].name = name
        // smashersCollected.splice(index, 1, powerlvl)
        res.status(200).send(smashersCollected[index])
    },
    defeatSmasher: (req, res) => {
        smashersCollected.push(challenger)
        challenger = {}
        res.status(200).send(smashersCollected)
    },
    beFree: (req, res) => {
        const {id} = req.params
        const index =  smashersCollected.findIndex(el => el.id === +id)
        smashersCollected.splice(index, 1)
        res.status(200).send(smashersCollected)
    }
}