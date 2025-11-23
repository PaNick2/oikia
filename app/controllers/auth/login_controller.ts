import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async index({ request, response, inertia, auth }: HttpContext) {
    if (auth.isAuthenticated) {
      return response.redirect().toRoute('home.index')
    } else {
      return inertia.render('auth/login', { csrfToken: request.csrfToken })
    }
  }

  async store({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)

      return response.redirect().toPath('/')
    } catch {
      return response.badRequest({ error: 'Invalid credentials' })
    }
  }
}
