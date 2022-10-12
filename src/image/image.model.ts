import { Field, ObjectType } from '@nestjs/graphql';
import {Image as ImageModel} from '@prisma/client'

@ObjectType()
export class Image implements Partial<ImageModel> {
  @Field()
  id: string;

  @Field({ nullable: true})
  blogId?: string;

  @Field({ nullable: true})
  categoryId?: string;

  @Field()
  path: string;
}