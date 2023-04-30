import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/User/UserRepository'
import UserService from 'App/Services/User/UserService'

export default class AdminsController {
    private userService: UserService
    constructor() {
        const userRepository = new UserRepository()
        this.userService = new UserService(userRepository)
    }

    public async index({ request, response }: HttpContextContract) {
        const { search } = request.qs()
        const users = await this.userService.index(search)
        return response.ok(users)
    }

    public async show({ params, response }: HttpContextContract) {
        const { userId } = params
        const users = await this.userService.show(userId)
        return response.ok(users)
    }

    public async showByEmail({ request, response }: HttpContextContract) {
        const { email } = request.qs()
        const users = await this.userService.showByEmail(email)
        return response.ok(users)
    }
}
