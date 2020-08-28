import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from './constant';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(payload: any) {
    return await this.usersService.findByPayload(payload);
  }

  async signPayload(payload: any) {
   return sign(payload, jwtConstants.secret, {expiresIn: '12h'});
  }

}
