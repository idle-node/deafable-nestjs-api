/*
  Warnings:

  - You are about to drop the column `destinationId` on the `Relation` table. All the data in the column will be lost.
  - You are about to drop the column `sourceId` on the `Relation` table. All the data in the column will be lost.
  - Added the required column `trackSegmentId` to the `Relation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Relation" DROP CONSTRAINT "Relation_destinationId_fkey";

-- DropForeignKey
ALTER TABLE "Relation" DROP CONSTRAINT "Relation_sourceId_fkey";

-- AlterTable
ALTER TABLE "Relation" DROP COLUMN "destinationId",
DROP COLUMN "sourceId",
ADD COLUMN     "trackSegmentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_trackSegmentId_fkey" FOREIGN KEY ("trackSegmentId") REFERENCES "TrackSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
