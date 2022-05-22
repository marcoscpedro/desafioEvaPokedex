'use strict'
const Pokedex = use("App/Models/Pokedex")
const ExcelJS = use('exceljs');
const pokedexJSON = require("../../../Pokedex.json")
class PokedexController {

    async importExcel (request, response){
        await Pokedex.create(pokedexJSON)
        return "cadastrado"        
        }
    
    


    async findAllPokemons (request, response) {
        const { gen, id, pokemon, TypeI, TypeII, sort } = request.body
        var pokemonList = await Pokedex.all().paginate(2,10)
        pokemonList = findBy(pokemonList, gen, "geracao")
        pokemonList = findBy(pokemonList, id, "id")
        pokemonList = findByElement(pokemonList, TypeI, TypeII)
        pokemonList = sortPokemonList(pokemonList, sort)
        return pokemonList
    }

    sortPokemonList (pokemonList, sort){
        const data = pokemonList
        var newPokemonList = data.sort((a,b)=>{
            return (a[sort] > b[sort])? 1: ((b[sort] > a[sort])? -1:0)
        })
    }

    findByElement (pokemonList, TypeI, TypeII) {
        const data = pokemonList
        var newPokemonList
        if (TypeI) {
            newPokemonList = data.filter((pokedex) => pokedex.typeI ==+ TypeI)
            if (TypeII) {
                newPokemonList = newPokemonList.filter((pokedex) => pokedex.typeII === TypeII)
                return newPokemonList
            }
            return newPokemonList
        }
        return data
    }


    findBy(pokemonList, param, objParam){
        const data = pokemonList
        if (param) {
            var newPokemonList = data.filter((pokedex) => pokedex.objParam === param)    
            return newPokemonList
        }
        else return data
    }



    async findByName (request, response) {
        const data = request.body
        var pokemon
        try {
            pokemon = await Pokedex
                .query()
                .where("Pokemon", data.pokemon)
                .first()
        } catch (error) {
            return response.send(error).status(408)
        }
        return response.send(pokemon).status(200)
    }




    async read (request, response, params){
        const id = params.id
        try {
            const pokemon = await Pokedex.find(id)    
        } catch (error) {
            return response.send(error).status(408)
        }
        return response.send(pokemon).status(200)
    }


    async update (request, response, params){
        const id = params.id
        const data = request.body
        try {
            const updatedPokemon = await Pokedex
                                        .query()
                                        .where('id', id)
                                        .update(data)    
        } catch (error) {
            return response.send(error).status(408)    
        }
        return response.send(updatedPokemon).status(200)
    }

    async destroy (request, response, params) {
        const id = params.id
        try {
            const deletedPokemon = await Pokedex.findOrFail(id)
            await deletedPokemon.delete()
        } catch (error) {
            return response.send(error).status(408)
        }
        return response.send("Pokemon Deletado").status(200)
    }
}

module.exports = PokedexController
