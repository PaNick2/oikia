import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async store({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.json({ success: true, message: 'Logged in successfully', data: { user } })
    } catch {
      return response.badRequest({ error: 'Invalid credentials' })
    }
  }
}
