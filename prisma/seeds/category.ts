import { Prisma, PrismaClient } from '@prisma/client';
import { SeedType } from './seed-type';

const inputData: {
  [key: string]: Prisma.CategoryCreateInput;
} = {
  lifestyle: {
    name: 'LifeStyle',
  },
  wellness: {
    name: 'Wellness',
  },
};

export default async function (prisma: PrismaClient, createdData: SeedType) {
  console.log('Seeding categories...');

  const keys = Object.keys(inputData)

  for (const key of keys) {
    const data = inputData[key]
    const retVal = await prisma.category.create({ data })
    createdData.categories[key] = retVal
  }

  console.log('Seeding categories finished...');
}
