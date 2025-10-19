import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Wishlist from './wishlist.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from './product.js'

export default class WishlistItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare wishlistId: number

  @column()
  declare productId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Wishlist)
  declare wishlist: BelongsTo<typeof Wishlist>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>
}
