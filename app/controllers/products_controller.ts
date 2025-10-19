import Post from '#models/post'
import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ request, inertia }: HttpContext) {
    const page = request.input('page', 1)
    let limit = request.input('limit', 12)
    if (limit === 'none') {
      limit = 100
    } else if (limit > 10) {
      limit = 10
    }

    const products = await Product.query().preload('category').paginate(page, limit)
    return inertia.render('products/all', { products })
  }

  async show({ params, inertia }: HttpContext) {
    const product = await Product.query().where('id', params.id).preload('category').firstOrFail()

    const featuredProducts = await Product.query().limit(10)

    const featuredPosts = await Post.query()
      .withScopes((scope) => scope.featured())
      .preload('tags')
      .preload('user')
      .limit(3)

    return inertia.render('products/show', { product, featuredPosts, featuredProducts })
  }
}
