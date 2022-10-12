import { Injectable } from "@nestjs/common";
import { Blog } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) { }

  getAllBlogs(): Promise<Blog[]> {
    return this.prisma.blog.findMany()
  }

  getBlogById(id: string): Promise<Blog> {
    return this.prisma.blog.findFirst({ where: { id }})
  }

  getBlogsByCategoryId(categoryId: string): Promise<Blog[]> {
    return this.prisma.blog.findMany({
      where: {
        categoryId
      }
    })
  }
}