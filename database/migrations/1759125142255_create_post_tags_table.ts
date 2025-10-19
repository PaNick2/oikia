import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'post_tag'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('post_id').unsigned().references('posts.id')
      table.integer('tag_id').unsigned().references('tags.id')
      table.unique(['post_id', 'tag_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
