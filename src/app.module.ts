import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { StationsModule } from './stations/stations.module';
import { TracksegmentModule } from './tracksegment/tracksegment.module';
import { TrainModule } from './train/train.module';
import { RelationModule } from './relation/relation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    StationsModule,
    TracksegmentModule,
    TrainModule,
    RelationModule,
  ],
})
export class AppModule {}
