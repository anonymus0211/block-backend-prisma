import { Injectable } from "@nestjs/common";
import { Image } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ImageService {
  constructor(private readonly prisma: PrismaService) { }

  getImagesForCategory(categoryId: string): Promise<Image[]> {
    return this.prisma.image.findMany({
      where: {
      categoryId
    }})
  }

  getImagesForBlog(blogId: string): Promise<Image[]> {
    return this.prisma.image.findMany({
      where: {
        blogId
      },
    });
  }
}