import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/User/UserRepository'
import UserService from 'App/Services/User/UserService'
import UpdateUserValidator from 'App/Validators/User/UpdateUserValidator'

export default class UsersController {
    private userService: UserService
    constructor() {
        const userRepository = new UserRepository()
        this.userService = new UserService(userRepository)
    }

    public async update({ params, request, response }: HttpContextContract) {
        const { userId } = params
        const user = await this.userService.show(userId)
        const userDto = await request.validate(UpdateUserValidator)
        await this.userService.update(user.id, userDto)
        return response.noContent()
    }
}
