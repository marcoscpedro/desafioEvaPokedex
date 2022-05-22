'use strict'
const pokedexJSON = require("../../Pokedex.json")
const Pokedex = use("App/Models/Pokedex")
/*
|--------------------------------------------------------------------------
| PokemonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PokemonSeeder {
  async run () {
    await Pokedex.create(pokedexJSON)
  }
}

module.exports = PokemonSeeder
