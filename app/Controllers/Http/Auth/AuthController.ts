import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserDto from 'App/Dtos/UserDto'
import UserRepository from "App/Repositories/User/UserRepository"
import UserService from "App/Services/User/UserService"
import CreateUserValidator from 'App/Validators/User/CreateUserValidator'
import LoginValidator from 'App/Validators/User/LoginValidator'

export default class UsersController {
    private userService: UserService
    constructor() {
        const userRepository = new UserRepository()
        this.userService = new UserService(userRepository)
    }

    public async signup({ request, auth, response }: HttpContextContract) {
        const userDto: UserDto = await request.validate(CreateUserValidator)

        const user = await this.userService.create(userDto)
        const token = await auth.use('api').generate(user)

        return response.created(token)
    }

    public async signin({ request, auth, response }: HttpContextContract) {
        const { email, password }: Pick<UserDto, "email" | "password"> = await request.validate(LoginValidator)
        const token = await auth.attempt(email, password)
        await this.userService.showByEmail(email)

        return response.ok(token)
    }
}

