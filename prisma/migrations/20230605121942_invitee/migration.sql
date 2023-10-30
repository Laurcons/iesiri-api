-- CreateTable
CREATE TABLE `Invitee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urlCode` VARCHAR(191) NOT NULL,
    `nickname` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `presenceConfirmed` BOOLEAN NOT NULL DEFAULT false,
    `pizzaPreference` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Invitee_urlCode_key`(`urlCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
