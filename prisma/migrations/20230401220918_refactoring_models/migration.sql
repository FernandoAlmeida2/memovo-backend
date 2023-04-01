/*
  Warnings:

  - You are about to drop the `userStats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userStats" DROP CONSTRAINT "userStats_cardId_fkey";

-- DropForeignKey
ALTER TABLE "userStats" DROP CONSTRAINT "userStats_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "currentSession" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "userStats";

-- CreateTable
CREATE TABLE "userCards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardId" INTEGER NOT NULL,
    "boxId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boxes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boxes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "boxes_name_key" ON "boxes"("name");

-- AddForeignKey
ALTER TABLE "userCards" ADD CONSTRAINT "userCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCards" ADD CONSTRAINT "userCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCards" ADD CONSTRAINT "userCards_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "boxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
