import { IsNotEmpty, IsEnum, IsBoolean } from 'class-validator';
import { EDeckType } from '../../common/models/deck-type.enum';

export class CreateDeckDto {
  @IsNotEmpty()
  @IsEnum(EDeckType, {
    message: `Invalid type. Valid types are: ${Object.values(EDeckType)}`,
  })
  type: EDeckType;

  @IsNotEmpty()
  @IsBoolean()
  shuffled: boolean;
}
