import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async all({ inertia }: HttpContext) {
    const products = await Product.all()

    return inertia.render('product/all', { products })
  }

  async show({ inertia, params }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const popularProducts = await Product.query().limit(4)

    return inertia.render('product/show', { product, popularProducts })
  }
}
