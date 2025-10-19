export type User = {
  id: number
  roleId: number
  fullName: string
  email: string
  password: string
}

export type Product = {
  id: number
  categoryId: number
  name: string
  description: string
  shortDescription: string
  price: number
  compareAtPrice: number
  imageUrl: string
  category?: Category
}

export type Category = {
  id: number
  name: string
  thumbnailUrl: string
  products?: Product[]
}

export type Post = {
  id: number
  title: string
  body: string
  imageUrl: string
  userId: number
  postStatusId: number
  isFeatured: boolean
  createdAt: string
  updatedAt: string
  tags?: Tag[]
  user?: User
}

export type Tag = {
  id: number
  name: string
}

export interface PaginationMeta {
  total: number
  per_page: number
  current_page: number
  last_page: number
  first_page: number
  first_page_url: string
  last_page_url: string
  next_page_url: string | null
  previous_page_url: string | null
}
