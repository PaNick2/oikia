import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  async handle({ auth }: HttpContext) {
    auth.use('web').logout()

    return 'Ook'
  }
}
