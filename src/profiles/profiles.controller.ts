import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/UpdateProfileDto.dto';

@Controller('profiles')
export class ProfilesController {
  @Get(':id')
  findAll(@Param('id') id: number) {
    return [{ id }];
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
      message: 'Profile updated successfully',
    };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return {
      message: `Profile with id ${id} deleted successfully`,
    };
  }
}
