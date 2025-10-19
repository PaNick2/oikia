import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @manyToMany(() => User, {
    localKey: 'id',
    pivotForeignKey: 'tag_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'post_id',
  })
  declare users: ManyToMany<typeof User>
}
