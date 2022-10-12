import { Prisma, PrismaClient } from "@prisma/client";
import { SeedType } from "./seed-type";

const userData: { [key: string]: Prisma.UserCreateInput } = {
  testUser: {
    name: 'TestUser',
    role: 'USER',
  },
  adminUser: {
    name: 'AdminUser',
    role: 'ADMIN',
  },
};



export default async function (prisma: PrismaClient, createdData: SeedType ) {
  console.log('Seeding users...')
  const keys = Object.keys(userData);
    for (const key of keys) {
      const data = userData[key];
      const retVal = await prisma.user.create({ data });
      createdData.users[key] = retVal;
    }
  console.log('Seeding user finished...')

}