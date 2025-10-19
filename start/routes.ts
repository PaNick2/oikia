/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ProductsController = () => import('#controllers/products_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const PostsController = () => import('#controllers/posts_controller')
const HomeController = () => import('#controllers/home_controller')
const WishlistsController = () => import('#controllers/wishlists_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index']).as('home.index')

router
  .group(() => {
    router.get('/', [CategoriesController, 'index']).as('categories.index')

    router.get('/featured', [CategoriesController, 'featured']).as('categories.featured')

    router.get('/:id', [CategoriesController, 'show']).as('categories.show')
  })
  .as('categories')
  .prefix('categories')

router.get('/products', [ProductsController, 'index']).as('products.index')

router.get('/products/:id', [ProductsController, 'show']).as('products.show')

router
  .group(() => {
    router.post('/register', [RegisterController, 'store']).as('register.store')

    router.post('/logout', [LogoutController, 'handle']).as('logout.handle')

    router.post('/login', [LoginController, 'store']).as('login.store')
  })
  .as('auth')

router
  .group(() => {
    router.get('/', [PostsController, 'index']).as('posts.index')

    router.get('/featured', [PostsController, 'featured']).as('posts.featured')

    router.get('/:id', [PostsController, 'show']).as('posts.show')
  })
  .as('blog')
  .prefix('blog')

router.get('wishlist', [WishlistsController, 'show']).as('wishlist.show')
router.get('wishlist/:product_id', [WishlistsController, 'update']).as('wishlist.update')

router.get('/dashboard', async ({ auth }) => {
  /**
   * First, authenticate the user
   */
  await auth.check()

  /**
   * Then access the user object
   */
  return await auth?.user
})
