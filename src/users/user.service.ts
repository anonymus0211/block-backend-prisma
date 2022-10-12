import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  allUsers(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  getUserById(id: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { id }})
  }
}