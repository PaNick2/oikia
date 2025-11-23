import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Silent auth middleware can be used as a global middleware to silent check
 * if the user is logged-in or not.
 *
 * The request continues as usual, even when the user is not logged-in.
 */
export default class SilentAuthMiddleware {
  async handle({ inertia, auth }: HttpContext, next: NextFn) {
    await auth.check()
    inertia.share({
      user: async (ctx: HttpContext) => {
        const user = ctx.auth?.user
        if (!user) return null
        await user?.load('wishlist')
        await user.wishlist.load('wishlistItems')
        await user?.load('cart')
        await user.cart.load('cartItems')
        return user
      },
    })
    return next()
  }
}
