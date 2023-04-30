import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.put('user/:userId', 'UsersController.update')
})
    .prefix(Env.get('PREFIX'))
    .namespace('App/Controllers/Http/User')