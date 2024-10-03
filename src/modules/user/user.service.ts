import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Tạo một user mới
  create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  // Lấy tất cả các user
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Lấy user theo ID
  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // Cập nhật user theo ID
  async update(id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateData);
    return this.findOne(id);
  }

  // Xóa user theo ID
  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
