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
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return [{ id }];
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return createProfileDto;
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
