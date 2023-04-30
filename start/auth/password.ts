import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('auth/password/forgot', 'PasswordsController.forgotPassword')
    Route.put('auth/password/validate-code', 'PasswordsController.validateCode')
    Route.put('auth/password/reset', 'PasswordsController.resetPassword')
})
    .prefix(Env.get('PREFIX'))
    .namespace('App/Controllers/Http/Auth')