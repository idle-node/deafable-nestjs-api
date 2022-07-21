/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Station` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "TrackSegment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "destinationId" TEXT NOT NULL,

    CONSTRAINT "TrackSegment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Station_code_key" ON "Station"("code");

-- AddForeignKey
ALTER TABLE "TrackSegment" ADD CONSTRAINT "TrackSegment_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Station"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
