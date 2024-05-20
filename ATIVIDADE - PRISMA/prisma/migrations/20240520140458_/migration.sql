/*
  Warnings:

  - Added the required column `imagemUrl` to the `Destino` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagemUrl` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagemUrl` to the `PontosTuristico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destino` ADD COLUMN `imagemUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `imagemUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pontosturistico` ADD COLUMN `imagemUrl` VARCHAR(191) NOT NULL;
