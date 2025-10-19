import type { HttpContext } from '@adonisjs/core/http'

import Category from '#models/category'
import Post from '#models/post'
import Product from '#models/product'
import db from '@adonisjs/lucid/services/db'

export default class HomeController {
  async index({ auth, inertia }: HttpContext) {
    // Featured categories
    const featuredCategories = await Category.featured()
    // Featured products
    const featuredProducts = await Product.query().limit(10)
    // Product on sale
    const productOnSale = await Product.query()
      .whereNotNull('compare_at_price')
      .select('*')
      .select(db.raw('compare_at_price - price as discount'))
      .orderBy('discount', 'desc')
      .first()
    // Featured posts
    const featuredPosts = await Post.query()
      .withScopes((scope) => scope.featured())
      .preload('tags')
      .preload('user')
      .limit(3)

    /**
     * Then access the user object
     */
    const user = await auth.user
    console.log('🚀 ~ HomeController ~ index ~ user:', user)
    return inertia.render('home', {
      user,
      featuredCategories,
      featuredProducts,
      productOnSale,
      featuredPosts,
    })
  }
}
