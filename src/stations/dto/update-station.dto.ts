// import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateStationDto } from './create-station.dto';

export class UpdateStationDto extends PartialType(
  CreateStationDto,
) {}
