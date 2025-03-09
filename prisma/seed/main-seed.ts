import { PrismaClient } from '@prisma/client';
import userPopulator from './populators/user-populator';
// import {
//   productPopulator,
//   productFilePath,
// } from './populators/product-populator'

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Initializing database seed...');

  await userPopulator();
  // await productPopulator(productFilePath)

  console.log('🌱 Database seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
