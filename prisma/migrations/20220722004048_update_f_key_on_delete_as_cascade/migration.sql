-- DropForeignKey
ALTER TABLE "Relation" DROP CONSTRAINT "Relation_nokaId_fkey";

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_nokaId_fkey" FOREIGN KEY ("nokaId") REFERENCES "Train"("noka") ON DELETE CASCADE ON UPDATE CASCADE;
