import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Tạo một user mới
  @Post()
  create(@Body() createUserDto: Partial<User>): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // Lấy tất cả các user
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Lấy user theo ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  // Cập nhật user theo ID
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    return this.userService.update(+id, updateUserDto);
  }

  // Xóa user theo ID
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(+id);
  }
}
