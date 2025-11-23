import CartItem from '#models/cart_item'
import type { HttpContext } from '@adonisjs/core/http'

export default class CartsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ request, response, auth }: HttpContext) {
    const { productId } = request.only(['productId'])
    const currentUser = auth.user
    if (productId && currentUser) {
      await currentUser.load('cart')
      const userCart = currentUser.cart
      await CartItem.create({
        productId: productId,
        cartId: userCart.id,
      })
      return { success: true, action: 'added' }
    }
  }

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {}
}
