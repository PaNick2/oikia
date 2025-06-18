import Category from '#models/category'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async show({ inertia, params }: HttpContext) {
    const currentCategory = await Category.query().where('id', params.id).preload('products')

    if (!currentCategory) {
      throw new Exception('Could not find that category', {
        code: 'E_NOT_FOUND',
        status: 404,
      })
    }

    return inertia.render('category/show', {
      currentCategory: currentCategory[0],
    })
  }
}
