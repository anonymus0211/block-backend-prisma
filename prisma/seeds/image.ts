import { Prisma, PrismaClient } from '@prisma/client';
import { SeedType } from './seed-type';

const generateInputData = (
  createdData: SeedType,
): {
  [key: string]: Prisma.ImageCreateInput;
} => ({
  image1: {
    path: 'https://via.placeholder.com/728',
    category: {
      connect: {
        id: createdData.categories.lifestyle.id,
      },
    },
  },
  image2: {
    path: 'https://via.placeholder.com/728',
    category: {
      connect: {
        id: createdData.categories.wellness.id,
      },
    },
  },
});

export default async function (prisma: PrismaClient, createdData: SeedType) {
  console.log('Seeding images...');
  const inputData = generateInputData(createdData);
  const keys = Object.keys(inputData);

  for (const key of keys) {
    const data = inputData[key];
    const retVal = await prisma.image.create({ data });
    createdData.images[key] = retVal;
  }

  console.log('Seeding images finished...');
}
