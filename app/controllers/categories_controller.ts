import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const categories = await await Category.query().paginate(1, 16)

    return inertia.render('categories/all', { categories })
  }

  async show({ inertia, params }: HttpContext) {
    const category = await Category.query().where('id', params.id).preload('products').firstOrFail()
    return inertia.render('categories/show', { category })
  }

  async featured({}: HttpContext) {
    return Category.featured()
  }
}
