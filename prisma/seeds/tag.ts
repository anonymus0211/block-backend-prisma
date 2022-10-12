import { Prisma, PrismaClient } from '@prisma/client';
import { SeedType } from './seed-type';

const inputData: {
  [key: string]: Prisma.TagCreateInput;
} = {
  tag1: {
    name: 'tag1',
  },
  tag2: {
    name: 'tag2',
  },
};

export default async function (prisma: PrismaClient, createdData: SeedType) {
  console.log('Seeding tags...');

  const keys = Object.keys(inputData);

  for (const key of keys) {
    const data = inputData[key];
    const retVal = await prisma.tag.create({ data });
    createdData.tags[key] = retVal;
  }

  console.log('Seeding tags finished...');
}
