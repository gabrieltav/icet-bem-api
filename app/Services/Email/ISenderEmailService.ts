
import EmailDto from "App/Dtos/EmailDto";
import User from "App/Models/User";

export default interface ISenderEmailService {
    sendValidationCodeEmail: (user: User, code: string) => Promise<void>
    sendEmail: (sendGridDtoWithoutFrom: Omit<EmailDto, 'from'>) => Promise<void>
}