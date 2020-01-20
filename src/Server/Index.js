const express = require('express')
const collectedCharacters = require('./collectedCharacters')
const app= express()
const port = 4002

app.use(express.json())

//endpoints
app.get('/api/newsmasher', collectedCharacters.getSmasher)
app.get('/api/smasher', collectedCharacters.getMySmashers)
app.get('/api/randomsmasher', collectedCharacters.getRandomSmasher)
app.post('/api/defeatsmasher', collectedCharacters.defeatSmasher)
app.post('/api/smasher', collectedCharacters.createSmasher)
app.put('/api/smasher/:id', collectedCharacters.updateName)
app.delete('/api/smasher/:id', collectedCharacters.beFree)




app.listen(port, () => {
    console.log(`Smash time on Port:${port}`)
})