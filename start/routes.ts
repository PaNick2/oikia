const HomeController = () => import('#controllers/home_controller')
import CategoriesController from '#controllers/categories_controller'
import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index']).as('home')
router.get('/product/:id', [ProductsController, 'show']).as('product.show')
router.get('/category/:id', [CategoriesController, 'show']).as('category.show')
