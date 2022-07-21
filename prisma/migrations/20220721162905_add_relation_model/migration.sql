/*
  Warnings:

  - A unique constraint covering the columns `[noka]` on the table `Train` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Relation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "destinationId" INTEGER NOT NULL,
    "nokaId" TEXT NOT NULL,

    CONSTRAINT "Relation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Train_noka_key" ON "Train"("noka");

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "TrackSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "TrackSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_nokaId_fkey" FOREIGN KEY ("nokaId") REFERENCES "Train"("noka") ON DELETE RESTRICT ON UPDATE CASCADE;
