'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('importExcel', "PokedexController.importExcel")
Route.post('user', "UserController.store")
Route.get('pokedex', 'PokedexController.findAllPokemons')
Route.get('pokedex/:id', 'PokedexController.read')
Route.put('pokedex/:id', 'PokedexController.update')
Route.delete('pokedex/:id', 'PokedexController.destroy')

Route
  .post('login', 'UserController.login')
  .middleware('guest')
