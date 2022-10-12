import { Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany()
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.prisma.category.findFirst({ where: { id }})
  }

}