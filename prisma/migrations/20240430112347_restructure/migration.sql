/*
  Warnings:

  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_user_id_fkey";

-- AlterTable
ALTER TABLE "Music" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_id";

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
