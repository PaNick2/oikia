import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cart_items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cart_id').references('carts.id').notNullable()
      table.integer('product_id').references('products.id').notNullable()
      table.integer('quantity').unsigned().notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.unique(['cart_id', 'product_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
