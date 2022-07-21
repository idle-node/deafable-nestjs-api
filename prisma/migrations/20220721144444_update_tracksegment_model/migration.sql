/*
  Warnings:

  - Added the required column `sourceId` to the `TrackSegment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TrackSegment" DROP CONSTRAINT "TrackSegment_destinationId_fkey";

-- AlterTable
ALTER TABLE "TrackSegment" ADD COLUMN     "sourceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TrackSegment" ADD CONSTRAINT "TrackSegment_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Station"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
