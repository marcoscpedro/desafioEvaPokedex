'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokedexSchema extends Schema {
  up () {
    this.create('pokedexes', (table) => {
      table.increments()
      table.string('Pokemon', 80).notNullable().unique()
      table.string('Type I', 20).notNullable()
      table.string('Type II', 20)
      table.integer('HP').notNullable().unsigned()
      table.integer('Atk').notNullable().unsigned()
      table.integer('Def').notNullable().unsigned()
      table.integer('SpA').notNullable().unsigned()
      table.integer('SpD').notNullable().unsigned()
      table.integer('Spe').notNullable().unsigned()
      table.integer('Total Status').notNullable().unsigned(),
      table.integer('geracao')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokedexes')
  }
}

module.exports = PokedexSchema
