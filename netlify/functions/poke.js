const fetch = require('node-fetch')

exports.handler = async function() {
    const poke = "https://pokeapi.co/api/v2/pokemon/ditto"
    const response = await fetch(poke)
    const data = await response.JSON()
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}