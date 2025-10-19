import User from '#models/user'
import Wishlist from '#models/wishlist'
import WishlistItem from '#models/wishlist_item'
import type { HttpContext } from '@adonisjs/core/http'

export default class WishlistsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const usedId = 1
    const currentWishlist = await Wishlist.query()
      .where('user_id', usedId)
      .preload('wishlistItems')
      .first()
    return currentWishlist
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    if (params.product_id) {
      const currentUser = await User.query().where('id', 1).preload('wishlist').first()
      if (currentUser) {
        const userWishlist = currentUser.wishlist
        await WishlistItem.create({
          productId: params.product_id,
          wishlistId: userWishlist.id,
        })
        response.status(200)
      }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
