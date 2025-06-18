import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const allProducts = await Product.all()

    inertia.share({
      test: true,
    })
    return inertia.render('home', { pageP: true, allProducts }, { viewP: true })
  }
}
