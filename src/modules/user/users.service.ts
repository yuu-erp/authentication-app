import {
    Injectable
} from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  async create() {
    return { message: 'Create User!'}
  }

  findManyWithPagination() {
    return { message: 'findManyWithPagination User!'}
  }

  findById() {
    return { message: 'findById User!'}
  }

  findByEmail() {
    return { message: 'findByEmail User!'}
  }

  findBySocialIdAndProvider() {
    return { message: 'findBySocialIdAndProvider User!'}
  }

  async update() {
    return { message: 'update User!'}
  }

  async remove() {
    return { message: 'remove User!'}
  }
}
