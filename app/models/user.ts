import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { afterCreate, BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Role from './role.js'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Cart from './cart.js'
import Post from './post.js'
import Wishlist from './wishlist.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roleId: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @hasOne(() => Cart)
  declare cart: HasOne<typeof Cart>

  @hasOne(() => Wishlist)
  declare wishlist: HasOne<typeof Wishlist>

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>

  @afterCreate()
  static async assignWishlistAndCart(user: User) {
    const newWishlist = await Wishlist.create({})
    const newCart = await Cart.create({})

    await user.related('wishlist').save(newWishlist)
    await user.related('cart').save(newCart)
  }

  static getEverything() {
    return 'Helloooooooooooooooo'
  }
}
