/*
  Warnings:

  - You are about to drop the column `type` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `blog_typeId`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `category_typeId`;

-- AlterTable
ALTER TABLE `Image` DROP COLUMN `type`,
    DROP COLUMN `typeId`,
    ADD COLUMN `blogId` VARCHAR(191) NULL,
    ADD COLUMN `categoryId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
