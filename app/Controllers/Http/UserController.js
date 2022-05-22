'use strict'
const User = use("App/Models/User")
class UserController {
  
    async store ({ request, response }) {
        const data = request.only(['username', 'email', 'password'])
        try {
          const users = await User.create(data)
          return response.send(users) 
        } catch(error) {
          return error 
        }
      }
    
    async login ({ auth, request }) { 
      const { email, password } = request.all()
      const user = await User
           .query()
           .where("email",email)
           .first()
         const token = await auth
         .withRefreshToken()
         .attempt(email, password, {
           id: user.id
         })
        return token
      }

}

module.exports = UserController
