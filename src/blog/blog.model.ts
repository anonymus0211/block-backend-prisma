import { Field, ObjectType } from "@nestjs/graphql";
import {Blog as BlogModel} from '@prisma/client'

@ObjectType()
export class Blog implements Partial<BlogModel> {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true})
  excerpt?: string;

  @Field()
  content: string;

  @Field()
  authorId: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field({ nullable: true})
  publishedAt?: Date;
}