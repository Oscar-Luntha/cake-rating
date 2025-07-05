-- CreateTable
CREATE TABLE "CustomerImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerImage_pkey" PRIMARY KEY ("id")
);
