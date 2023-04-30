import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: '123123',
  }
}).build()
