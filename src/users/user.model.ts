import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {User as UserModel, UserRole} from '@prisma/client'

registerEnumType(UserRole, { name: 'UserRole'})

@ObjectType()
export class User implements Partial<UserModel> {
  @Field()
  id: string;

  @Field()
  name: string

  @Field(() => UserRole)
  role?: UserRole
}