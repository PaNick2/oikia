import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeSave,
  belongsTo,
  column,
  computed,
  manyToMany,
  scope,
} from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import PostStatus from './post_status.js'
import { toHtml } from '@dimerapp/markdown/utils'
import { MarkdownFile } from '@dimerapp/markdown'
import Tag from './tag.js'

export default class Post extends BaseModel {
  serializeExtras = true
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare body: string

  @column()
  declare imageUrl: string

  @column()
  declare userId: number

  @column()
  declare postStatusId: number

  @column()
  declare isFeatured: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async renderMarkdown(post: Post) {
    if (post.$dirty.body) {
      const md = new MarkdownFile(post.body)
      await md.process()
      post.body = toHtml(md).contents
    }
  }

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => PostStatus)
  declare status: BelongsTo<typeof PostStatus>

  @manyToMany(() => Tag, {
    localKey: 'id',
    pivotForeignKey: 'post_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'tag_id',
  })
  declare tags: ManyToMany<typeof Tag>

  static featured = scope((query) => {
    query.where('is_featured', true)
  })
}
