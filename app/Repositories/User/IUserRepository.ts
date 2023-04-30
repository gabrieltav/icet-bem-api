import UserDto from "App/Dtos/UserDto";
import User from "App/Models/User";

export default interface UserRepository {
    create: (user: UserDto) => Promise<User>
    show: (id: string) => Promise<User>
    showByEmail: (email: string) => Promise<User>
    index: (search: string) => Promise<User[]>
    update: (id: string, partialUser: Partial<UserDto>) => Promise<void>
    delete: (id: string) => Promise<void>
    deleteAllAuthTokens: (id: string) => Promise<void>
}