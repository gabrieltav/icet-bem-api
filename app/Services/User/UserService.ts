import UserDto from "App/Dtos/UserDto";
import User from "App/Models/User";
import IUserRepository from "App/Repositories/User/IUserRepository";

export default class UserService {
    constructor(private readonly userRepository: IUserRepository) { }

    public async create(user: UserDto): Promise<User> {
        return await this.userRepository.create(user)
    }

    public async show(id: string): Promise<User> {
        return await this.userRepository.show(id)
    }

    public async showByEmail(email: string): Promise<User> {
        return await this.userRepository.showByEmail(email)
    }

    public async index(search?: string): Promise<User[]> {
        return await this.userRepository.index(search || '')
    }

    public async update(id: string, user: Partial<UserDto>): Promise<void> {
        return await this.userRepository.update(id, user)
    }

    public async delete(id: string): Promise<void> {
        return await this.userRepository.delete(id)
    }
}