import { Module } from "@nestjs/common";
import { ImageModule } from "src/image/image.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

@Module({
  imports: [PrismaModule, ImageModule],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService]
})
export class CategoryModule {}