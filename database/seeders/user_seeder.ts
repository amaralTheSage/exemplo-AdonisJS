import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await UserFactory.createMany(10)
  }
}
