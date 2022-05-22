'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesPokemonSchema extends Schema {
  up () {
    this.create('images_pokemon', (table) => {
      table.increments()
      table.integer('pokedex_id').unsigned().references('id').inTable('pokedexes')
      table.longtext('url_image')
      table.timestamps()
    })
  }

  down () {
    this.drop('images_pokemon')
  }
}

module.exports = ImagesPokemonSchema
