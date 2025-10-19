import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'wishlist_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('wishlist_id').references('wishlists.id').notNullable()
      table.integer('product_id').references('products.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.unique(['wishlist_id', 'product_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
