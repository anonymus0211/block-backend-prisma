import { PrismaClient, Prisma } from '@prisma/client';
import { SeedType } from './seeds/seed-type';

import seedUsers from './seeds/user'
import seedCategories from './seeds/category'
import seedTags from './seeds/tag'
import seedBlogs from './seeds/blog'
import seedImages from './seeds/image'

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const createdData: SeedType = {
    categories: {},
    users: {},
    tags: {},
    blogs: {},
    images: {}
  }
  await seedCategories(prisma, createdData)
  await seedTags(prisma, createdData)
  await seedUsers(prisma, createdData)
  await seedBlogs(prisma, createdData)
  await seedImages(prisma, createdData)

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
