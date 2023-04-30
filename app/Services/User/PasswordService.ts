import UserDto from "App/Dtos/UserDto";
import IUserRepository from "App/Repositories/User/IUserRepository";

export default class PasswordService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async resetPassword(
    userId: string,
    userDto: Pick<UserDto, "password">
  ): Promise<void> {
    await this.userRepository.update(userId, userDto);
    await this.userRepository.deleteAllAuthTokens(userId);
  }
}
