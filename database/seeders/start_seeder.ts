import Roles from '#enums/roles'
import Category from '#models/category'
import Post from '#models/post'
import PostStatus from '#models/post_status'
import Product from '#models/product'
import Role from '#models/role'
import Tag from '#models/tag'
import User from '#models/user'
import app from '@adonisjs/core/services/app'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import * as fs from 'node:fs'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    //? 1. Create roles
    await Role.createMany([{ name: 'User' }, { name: 'Admin' }])

    //? 2. Create post statuses
    await PostStatus.createMany([{ name: 'Draft' }, { name: 'Public' }, { name: 'Archived' }])

    //? 3. Create users
    await User.create({
      roleId: Roles.ADMIN,
      fullName: 'Nick Panagopoulos',
      email: 'nick@gmail.com',
      password: '12345678',
    })

    //? 4. Create categories
    await Category.createMany([
      {
        name: 'Bedroom',
        thumbnailUrl: '/resources/images/products/bed_frame_light_gray.png',
      },
      {
        name: 'Living room',
        thumbnailUrl: '/resources/images/products/green_chair_with_wooden_legs.png',
      },
      {
        name: 'Bathroom',
        thumbnailUrl: '/resources/images/products/loft_style_lamp.png',
      },
      {
        name: 'Decoration',
        thumbnailUrl: '/resources/images/products/blue_armchair_with_iron_legs.png',
      },
      {
        name: 'Office',
        thumbnailUrl: '/resources/images/products/soft_chair_with_cushion_and_wooden_legs.png',
      },
      {
        name: 'Kitchen',
        thumbnailUrl: '/resources/images/products/decorative_flowerpot_with_a_plan.png',
      },
    ])

    //? 5. Create products
    await Product.createMany([
      {
        categoryId: 1,
        name: 'Bed Frame Light Gray 140x200 cm',
        description:
          'Elevate your bedroom with this sleek, minimalist bed frame in a soft light gray finish. Designed to fit 140x200 cm mattresses, it offers solid support, modern aesthetics, and a timeless appeal that suits a wide range of interiors.',
        shortDescription:
          'Minimalist light gray bed frame for 140x200 cm mattresses. Sleek, modern, and supportive.',
        price: 760,
        imageUrl: '/resources/images/products/bed_frame_light_gray.png',
      },
      {
        categoryId: 2,
        name: 'Green Chair with Wooden Legs 60x100 cm',
        description:
          "Bring a pop of color and natural charm to your space with this green chair featuring sturdy wooden legs. Sized at 60x100 cm, it's ideal for dining rooms, reading nooks, or home offices. Its ergonomic design ensures both comfort and visual appeal.",
        shortDescription:
          'Stylish green chair with natural wooden legs. Perfect for dining or lounge spaces.',
        price: 357,
        imageUrl: '/resources/images/products/green_chair_with_wooden_legs.png',
      },
      {
        categoryId: 2,
        name: 'Loft-Style Lamp 120x80 cm',
        description:
          'Make a statement with this 120x80 cm loft-style lamp. With industrial-inspired detailing and a strong structural presence, it’s the perfect lighting piece to bring urban edge and warmth to modern or rustic interiors.',
        shortDescription:
          'Industrial loft-style lamp with a bold presence. Adds character to any room.',
        price: 140,
        compareAtPrice: 200,
        imageUrl: '/resources/images/products/loft_style_lamp.png',
      },
      {
        categoryId: 2,
        name: 'Blue Armchair with Iron Legs',
        description:
          'Relax in style with this bold blue armchair featuring durable iron legs for a modern touch. Its soft upholstery and ergonomic form offer lasting comfort, making it a striking yet functional addition to any living space.',
        shortDescription: 'Comfortable blue armchair with sturdy iron legs. Bold and contemporary.',
        price: 220,
        imageUrl: '/resources/images/products/blue_armchair_with_iron_legs.png',
      },
      {
        categoryId: 2,
        name: 'Soft Chair with Cushion and Wooden Legs',
        description:
          'Experience plush comfort with this soft cushioned chair, supported by elegant wooden legs. Perfect for reading corners or cozy gatherings, it adds a gentle, inviting feel to any interior.',
        shortDescription: 'Cozy cushioned chair with wooden legs. Comfort meets elegance.',
        price: 245,
        imageUrl: '/resources/images/products/soft_chair_with_cushion_and_wooden_legs.png',
      },
      {
        categoryId: 4,
        name: 'Decorative Flowerpot with a Plant',
        description:
          'Add a touch of nature to your space with this beautifully designed flowerpot complete with a realistic plant. Whether real or artificial, it requires little upkeep while providing a fresh, vibrant accent to shelves, desks, or windowsills.',
        shortDescription:
          'Stylish decorative flowerpot with a lifelike plant. Low maintenance, high impact.',
        price: 107.5,
        compareAtPrice: 150,
        imageUrl: '/resources/images/products/decorative_flowerpot_with_a_plant.png',
      },
      {
        categoryId: 4,
        name: 'Home Fragrance with the Aroma of Spices',
        description:
          'Fill your space with the cozy, comforting scent of spices. This home fragrance combines cinnamon, clove, and subtle woody undertones to create a warm, welcoming atmosphere that lingers pleasantly throughout your day.',
        shortDescription: 'Warm home fragrance with rich spicy notes. Inviting and aromatic.',
        price: 24,
        imageUrl: '/resources/images/products/home_fragrance_with_the_aroma_of_spices.png',
      },
      {
        categoryId: 2,
        name: 'Chair with a Cushion for the Legs',
        description:
          'Unwind in comfort with this thoughtfully designed chair, complete with a matching cushion to support your legs. Perfect for reading, lounging, or end-of-day relaxation, this set blends functionality with stylish simplicity.',
        shortDescription: 'Relaxing chair with a matching leg cushion. Ideal for unwinding.',
        price: 220,
        imageUrl: '/resources/images/products/modern_lounge_couch_on_wooden_frame.png',
      },
      {
        categoryId: 2,
        name: 'Green Chair with Wooden Legs 60x100 cm (variation)',
        description:
          'Add a refreshing vibe to your décor with this green accent chair, crafted with smooth wooden legs and comfortable proportions (60x100 cm). Its cheerful color and natural materials make it a go-to piece for any modern interior.',
        shortDescription: 'Green accent chair with wood legs. Fresh look, everyday comfort.',
        price: 160,
        imageUrl: '/resources/images/products/green_chair_with_wooden_legs.png',
      },
      {
        categoryId: 5,
        name: 'Leather Office Chair with One Leg',
        description:
          "Stand out with this uniquely designed leather office chair featuring a single central leg for modern flair and ergonomic balance. Combining comfort with unconventional design, it's ideal for creative workspaces or minimalist offices.",
        shortDescription:
          'Unique leather office chair with a central support leg. Bold and ergonomic.',
        price: 345,
        imageUrl: '/resources/images/products/leather_office_chair_with_one_leg.png',
      },
      {
        categoryId: 2,
        name: 'Armchair with Wooden Legs 70x120 cm',
        description:
          'Designed for comfort and character, this 70x120 cm armchair features soft upholstery and classic wooden legs. Its generous size and supportive backrest make it a favorite for relaxing afternoons or entertaining guests.',
        shortDescription: 'Spacious armchair with warm wooden legs. Stylish and inviting.',
        price: 270,
        imageUrl: '/resources/images/products/armchair_with_wooden_legs.png',
      },
      {
        categoryId: 2,
        name: 'Wooden Shelf for Decor Elements',
        description:
          'Showcase your favorite décor items with this sleek wooden shelf. With a natural finish and minimal lines, it seamlessly blends into modern, Scandinavian, or rustic interiors, providing practical storage and stylish display.',
        shortDescription: 'Natural wooden shelf for décor display. Clean, minimal design.',
        price: 278,
        compareAtPrice: 300,
        imageUrl: '/resources/images/products/wooden_shelf_for_decor_elements.png',
      },
      {
        categoryId: 2,
        name: 'Aluminium Foldable Desk Lamp',
        description:
          'This aluminium desk lamp combines form and function with its sleek design and foldable construction. Perfect for workspaces or bedside tables, it offers adjustable lighting and space-saving convenience without compromising on style.',
        shortDescription: 'Sleek foldable desk lamp in aluminium. Compact and modern.',
        price: 89.99,
        imageUrl: '/resources/images/products/aluminium_foldable_desk_lamp.png',
      },
      {
        categoryId: 2,
        name: 'Modern Lounge Couch on Wooden Frame',
        description:
          'Elevate your lounging experience with this modern couch, built on a robust wooden frame. Its clean lines, supportive cushions, and neutral tones make it an essential piece for contemporary homes focused on both comfort and design.',
        shortDescription: 'Elegant lounge couch on a sturdy wooden frame. Modern comfort.',
        price: 638,
        imageUrl: '/resources/images/products/modern_lounge_couch_on_wooden_frame.png',
      },
      {
        categoryId: 2,
        name: 'Adjustable Hardwire Wall Sconce',
        description:
          'Brighten your space with this adjustable wall sconce featuring a hardwired setup for a clean, seamless appearance. Its pivoting arm allows for directional lighting, making it ideal for bedrooms, reading corners, or hallways.',
        shortDescription: 'Modern wall sconce with adjustable arm. Hardwired for a sleek look.',
        price: 74,
        imageUrl: '/resources/images/products/adjustable_hardwire_wall_sconce.png',
      },
      {
        categoryId: 2,
        name: 'Soft Armchair with Wooden Legs',
        description:
          'Sink into comfort with this plush armchair, supported by beautifully crafted wooden legs. Whether used as an accent in a living room or a cozy seat in a study, it offers timeless appeal and everyday relaxation.',
        shortDescription: 'Plush armchair with natural wood legs. A cozy classic.',
        price: 215,
        imageUrl: '/resources/images/products/soft_armchair_with_wooden_legs.png',
      },
    ])

    //? 7. Create post tags
    await Tag.createMany([
      { name: 'Inspiration' },
      { name: 'Lighting' },
      { name: 'Furniture' },
      { name: 'Inerior Design' },
      { name: 'Office' },
      { name: 'Design Trends' },
      { name: 'Living room' },
    ])

    //? 7. Create posts
    const postFiles = [
      app.makeURL('resources/blog/posts/post_1.md'),
      app.makeURL('resources/blog/posts/post_2.md'),
      app.makeURL('resources/blog/posts/post_3.md'),
    ]

    const posts = [
      {
        title: 'How to Choose the Perfect Sofa for Your Living Room',
        body: fs.readFileSync(app.makeURL('resources/blog/posts/post_1.md'), 'utf8'),
        imageUrl: '/resources/images/products/how-to-choose-the-perfect-sofa.jpg',
        userId: 1,
        isFeatured: true,
        tags: [3, 4, 7],
      },
      {
        title: '5 Timeless Furniture Pieces Every Home Should Have',
        body: fs.readFileSync(app.makeURL('resources/blog/posts/post_2.md'), 'utf8'),
        imageUrl: '/resources/images/products/furniture-every-home-should-have.jpg',
        userId: 1,
        isFeatured: true,
        tags: [1, 3, 4, 6, 7],
      },
      {
        title: 'Caring for Your Wooden Furniture: Tips That Last a Lifetime',
        body: fs.readFileSync(app.makeURL('resources/blog/posts/post_3.md'), 'utf8'),
        imageUrl: '/resources/images/products/caring-for-wooden-furniture.jpg',
        userId: 1,
        isFeatured: true,
        tags: [1, 3, 6],
      },
    ]

    for (const post of posts) {
      const p = await Post.create(post)
      await p.related('tags').attach([1, 2, 3])
    }
  }
}
