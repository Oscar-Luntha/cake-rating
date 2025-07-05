/*
  Warnings:

  - You are about to drop the `CustomerImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CustomerImage";

-- CreateTable
CREATE TABLE "WallOfFame" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "images" TEXT[],

    CONSTRAINT "WallOfFame_pkey" PRIMARY KEY ("id")
);
