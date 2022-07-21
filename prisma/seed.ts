// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
import * as argon from 'argon2';

// KRL route
// https://www.krl.co.id/jadwalkrl/
// download as excel, copy row, replace with space
// replace space with new line using this web https://tools.knowledgewalls.com/onlinereplacespacewithnewlinetool
// convert formated new line as csv using this web https://www.convertcsv.com/csv-to-json.htm
import boojakk from './json/boojakk.json';
import rboojakk from './json/routes-boojakk.json';

const prisma = new PrismaClient();

const fakerFirstUser = (): any => ({
  firstName: 'test',
  lastName: 'user',
  email: faker.internet.email(),
});

const fakerUserWithoutHash = (): any => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log('Seeding...');

  // NOTE: Order of seeding is matter

  /// --------- Trains --------------
  await prisma.train.deleteMany();
  // for (let i = 0; i < 10; i++) {
  //   await prisma.train.create({
  //     data: {
  //       noka: (4000 + i).toString(),
  //     },
  //   });
  // }
  await prisma.train.create({
    data: {
      noka: '4045',
    },
  });
  await prisma.train.create({
    data: {
      noka: '4047',
    },
  });
  await prisma.train.create({
    data: {
      noka: '4049',
    },
  });

  /// --------- Stations ------------
  for (let i = 0; i < boojakk.length; i++) {
    const exist = await prisma.station.findFirst({
      where: {
        code: boojakk[i].code,
      },
    });

    if (!exist) {
      await prisma.station.create({
        data: {
          name: boojakk[i].code,
          code: boojakk[i].code,
        },
      });
    }
  }

  /// --------- TrackSegments -------
  await prisma.trackSegment.deleteMany();
  for (let i = 0; i < boojakk.length; i++) {
    for (let j = 0; j < boojakk.length; j++) {
      if (i != j && j > i) {
        // console.log(
        //   boojakk[i].code +
        //     ' - ' +
        //     boojakk[j].code,
        // );

        await prisma.trackSegment.create({
          data: {
            destinationId: boojakk[j].code,
            sourceId: boojakk[i].code,
          },
        });
      }
    }
  }

  /// --------- Relations -----------
  await prisma.relation.deleteMany();
  // for (let i = 0; i < rboojakk.length; i++) {
  for (const [key, value] of Object.entries(
    rboojakk,
  )) {
    // console.log({
    //   key,
    //   value,
    // });

    console.log('-----');

    // const data = Object.keys(value);
    for (const prop in value) {
      if (
        Object.prototype.hasOwnProperty.call(
          value,
          prop,
        )
      ) {
        for (let i = 0; i < boojakk.length; i++) {
          // console.log(prop);

          if (
            prop == boojakk[i].code &&
            value[boojakk[i].code] != ''
          ) {
            // console.log(
            // prop + ' - ' + i,
            // value[boojakk[i].code],
            // );

            const currentSourceId =
              await prisma.trackSegment.findFirst(
                {
                  where: {
                    sourceId: prop,
                  },
                },
              );

            if (currentSourceId) {
              // console.log(
              //   prop + ' - ' + currentSourceId.id,
              // );

              await prisma.relation.create({
                data: {
                  name: value.name,
                  time: value[boojakk[i].code],
                  nokaId: value.noka.toString(),
                  trackSegmentId:
                    currentSourceId.id,
                },
              });
            }

            // console.log(value);
          }
        }
      }
    }

    // await this.prisma.relation.create({
    //   where: {
    //     name: value.name,
    //   },
    // });
  }
  // }

  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    // first user always have same value
    const fakerUser =
      i == 0
        ? fakerFirstUser()
        : fakerUserWithoutHash();

    // make all user have the same password 'test12'
    const hash = await argon.hash(
      //   i == 0
      // ?
      'test12',
      // : faker.internet.password(),
    );

    fakerUser.hash = hash;

    await prisma.user.create({
      data: fakerUser,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
