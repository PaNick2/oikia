import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async show({ inertia, params }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    inertia.share({
      controller: 'products',
      product,
    })
    return inertia.render('product/show')
  }
}
