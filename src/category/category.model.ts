import { Field, ObjectType } from "@nestjs/graphql";
import { Category as CategoryModel } from '@prisma/client'

@ObjectType()
export class Category implements CategoryModel {

  @Field()
  id: string;

  @Field()
  name: string;
}