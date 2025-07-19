import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const popularProducts = await Product.query().limit(4)

    inertia.share({
      test: true,
    })
    return inertia.render('home', { pageP: true, popularProducts }, { viewP: true })
  }
}
