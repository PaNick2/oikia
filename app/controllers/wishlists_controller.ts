import Wishlist from '#models/wishlist'
import WishlistItem from '#models/wishlist_item'
import type { HttpContext } from '@adonisjs/core/http'

export default class WishlistsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const usedId = 1
    const currentWishlist = await Wishlist.query()
      .where('user_id', usedId)
      .preload('wishlistItems')
      .first()
    return currentWishlist
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({}: HttpContext) {}

  /**
   * Show individual record
   */
  async show({}: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ request, auth }: HttpContext) {
    const { productId } = request.only(['productId'])
    const currentUser = auth.user
    if (productId && currentUser) {
      await currentUser.load('wishlist')
      const userWishlist = currentUser.wishlist
      const existing = await userWishlist
        .related('wishlistItems')
        .query()
        .where('product_id', productId)
        .first()
      if (existing) {
        await existing.delete()
        return { success: true, action: 'removed' }
      }
      await WishlistItem.create({
        productId: productId,
        wishlistId: userWishlist.id,
      })
      return { success: true, action: 'added' }
    }
  }

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {}
}
