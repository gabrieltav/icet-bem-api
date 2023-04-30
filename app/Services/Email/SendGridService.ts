import EmailDto from 'App/Dtos/EmailDto';
import User from 'App/Models/User';
import getSendValidationCodeEmailHtml from './EmailTemplates/sendValidationCodeEmail';
import ISenderEmailService from './ISenderEmailService';

export default class SendGridService implements ISenderEmailService{
    public async sendValidationCodeEmail(user: User, code: string): Promise<void> {
        const emailDtoWithoutFrom = {
            to: user.email,
            subject: 'Test',
            text: 'Test',
            html: getSendValidationCodeEmailHtml(code, user.name)
        }

        await this.sendEmail(emailDtoWithoutFrom)
    }

    public async sendEmail(emailDtoWithoutFrom: Omit<EmailDto, 'from'>): Promise<void> {
        console.log({ from: 'email@qualquer', ...emailDtoWithoutFrom })
    }

    // public async sendEmail(sendGridDtoWithoutFrom: Omit<SendGridDto, 'from'>): Promise<void> {
    //     sgMail.setApiKey(Env.get('SENDGRID_API_KEY'))
    //     await sgMail.send({ from: 'email@qualquer', ...sendGridDtoWithoutFrom })
    // }
}