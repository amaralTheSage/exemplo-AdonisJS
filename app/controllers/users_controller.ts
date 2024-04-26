import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const users = await User.all()
    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const body = request.only(['username', 'email'])

    const user = await User.create({
      username: body.username,
      email: body.email,
    })

    console.log(user.$isPersisted)
    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await User.findByOrFail('id', params.id)

    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const body = request.only(['username', 'email'])

    const user = await User.findByOrFail('id', params.id)

    await user.merge(body)

    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findByOrFail('id', params.id)
    await user.delete()

    return user
  }
}
