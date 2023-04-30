import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('admin/users', 'AdminsController.index')
    Route.get('admin/user/:userId', 'AdminsController.show')
    Route.get('admin/user-email', 'AdminsController.showByEmail')
})
    .prefix(Env.get('PREFIX'))
    .namespace('App/Controllers/Http/Admin')