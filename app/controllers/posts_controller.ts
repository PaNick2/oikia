// import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    const posts = await Post.query().preload('tags').preload('user').paginate(1, 4)
    return inertia.render('blog/index', { posts })
  }

  async show({ inertia, params }: HttpContext) {
    const post = await Post.query()
      .where('id', params.id)
      .preload('tags')
      .preload('user')
      .firstOrFail()
    return inertia.render('blog/show', { post })
  }

  async featured() {
    return Post.query().withScopes((scope) => scope.featured())
  }
}
