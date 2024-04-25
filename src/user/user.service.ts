/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ token: string; user: object }> {
    try {
      const {
        firstname,
        lastname,
        middlename,
        username,
        email_id,
        userpassword,
        created_date,
        privilege_id,
        contact_id,
      } = createUserDto;

      const hashedPassword = await bcrypt.hash(userpassword, 10);

      const user = await this.userRepository.save({
        firstname,
        lastname,
        middlename,
        username,
        email_id: email_id || null,
        userpassword: hashedPassword,
        created_date,
        privilege_id,
        contact_id,
      });

      const token = this.jwtService.sign({ id: user.id_user });

      return { token, user };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already exists');
      } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new ConflictException('No such reference key for phone number');
      } else {
        console.log(error.code);
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string; user: object }> {
    const { username, userpassword } = loginDto;

    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException('Invalid username');
    }

    const isPasswordMatched = await bcrypt.compare(
      userpassword,
      user.userpassword,
    );

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = this.jwtService.sign({ id: user.id_user });

    return { token, user };
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id_user: number) {
    return this.userRepository.findOneBy({ id_user });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const {
        firstname,
        lastname,
        middlename,
        username,
        email_id,
        userpassword,
        changed_date,
        privilege_id,
        contact_id,
      } = updateUserDto;

      const hashedPassword = await bcrypt.hash(userpassword, 10);

      const user = await this.userRepository.update(id, {
        firstname,
        lastname,
        middlename,
        username,
        email_id: email_id || null,
        userpassword: hashedPassword,
        changed_date,
        privilege_id,
        contact_id,
      });

      return { user };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
    // return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
