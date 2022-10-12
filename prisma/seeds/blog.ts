import { Prisma, PrismaClient } from '@prisma/client';
import { SeedType } from './seed-type';

const generateInputData = (
  createdData: SeedType,
): {
  [key: string]: Prisma.BlogCreateInput;
} => ({
  blog1: {
    author: {
      connect: {
        id: createdData.users.testUser.id,
      },
    },
    category: {
      connect: {
        id: createdData.categories.lifestyle.id,
      },
    },
    title: 'Blog1 Title',
    content: 'Blog1 Content',
    excerpt: 'Blog1 Data',
    tags: {
      connect: [
        {
          id: createdData.tags.tag1.id,
        },
      ],
    },
    publishedAt: new Date(),
  },
  blog2: {
    author: {
      connect: {
        id: createdData.users.adminUser.id,
      },
    },
    category: {
      connect: {
        id: createdData.categories.wellness.id,
      },
    },
    title: 'Blog1 Title',
    content: 'Blog1 Content',
    excerpt: 'Blog1 Data',
    tags: {
      connect: [
        {
          id: createdData.tags.tag1.id,
        },
        {
          id: createdData.tags.tag2.id,
        },
      ],
    },
    publishedAt: new Date(),
  },
});



export default async function (prisma: PrismaClient, createdData: SeedType) {
  console.log('Seeding blogs...');
  const inputData = generateInputData(createdData)
  const keys = Object.keys(inputData);

  for (const key of keys) {
    const data = inputData[key];
    const retVal = await prisma.blog.create({ data });
    createdData.blogs[key] = retVal;
  }

  console.log('Seeding blogs finished...');
}
