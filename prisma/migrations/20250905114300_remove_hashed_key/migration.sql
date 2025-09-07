/*
  Warnings:

  - You are about to drop the column `hashedKey` on the `Rating` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Rating_hashedKey_key";

-- AlterTable
ALTER TABLE "public"."Rating" DROP COLUMN "hashedKey";
