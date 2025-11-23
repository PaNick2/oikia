const LoginController = () => import('#controllers/auth/login_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const HomeController = () => import('#controllers/home_controller')
const PostsController = () => import('#controllers/posts_controller')
const ProductsController = () => import('#controllers/products_controller')
const WishlistsController = () => import('#controllers/wishlists_controller')
const CartsController = () => import('#controllers/carts_controller')
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
    router.get('/register', [RegisterController, 'index']).as('register.index')
    router.post('/register', [RegisterController, 'store']).as('register.store')

    router.post('/logout', [LogoutController, 'handle']).as('logout.handle')

    router.get('/login', [LoginController, 'index']).as('login.index')
    router.post('/login', [LoginController, 'store']).as('login.store')
  })
  .as('auth')
  .prefix('auth')

router
  .group(() => {
    router.get('/', [PostsController, 'index']).as('posts.index')

    router.get('/featured', [PostsController, 'featured']).as('posts.featured')

    router.get('/:id', [PostsController, 'show']).as('posts.show')
  })
  .as('blog')
  .prefix('blog')

router
  .group(() => {
    router.get('wishlist', [WishlistsController, 'index']).as('wishlist.show')
    router.post('wishlist', [WishlistsController, 'update']).as('wishlist.update')
  })
  .as('wishlist')

router
  .group(() => {
    router.get('/cart', [CartsController, 'index']).as('cart.show')
    router.post('/cart', [CartsController, 'update']).as('cart.update')
  })
  .as('cart')
