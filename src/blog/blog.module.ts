import { Module } from "@nestjs/common";
import { CategoryModule } from "src/category/category.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/users/user.module";
import { BlogResolver } from "./blog.resolver";
import { BlogService } from "./blog.service";

@Module({
  imports: [PrismaModule, CategoryModule, UserModule],
  providers: [BlogService, BlogResolver],
  exports: [BlogService]
})
export class BlogModule { }