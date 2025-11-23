import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import CartItem from './cart_item.js'
import WishlistItem from './wishlist_item.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryId: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare shortDescription: string

  @column()
  declare price: number

  @column()
  declare compareAtPrice: number

  @column()
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @hasMany(() => CartItem)
  declare cartItems: HasMany<typeof CartItem>

  @hasMany(() => WishlistItem)
  declare wishlistItems: HasMany<typeof WishlistItem>
}
