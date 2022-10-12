import { Blog, Category, Image, Tag, User } from "@prisma/client";

export type SeedType = {
  categories?: {
    [key: string]: Category
  }
  users?: {
    [key: string]: User
  }

  tags?: {
    [key:string]: Tag
  }

  blogs?: {
    [key: string]: Blog
  }

  images?: {
    [key: string]: Image
  }
}