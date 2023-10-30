/*
  Warnings:

  - You are about to drop the column `presenceConfirmed` on the `Invitee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Invitee` DROP COLUMN `presenceConfirmed`,
    ADD COLUMN `presenceStatus` ENUM('confirmed', 'possible', 'negated') NULL;
