import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('body', 'longtext').notNullable()
      table.string('image_url').notNullable()
      table.integer('user_id').references('users.id').notNullable()
      table.integer('post_status_id').references('post_statuses.id').notNullable().defaultTo(1)
      table.boolean('is_featured').defaultTo(false)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
