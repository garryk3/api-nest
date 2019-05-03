import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from '../types/interfaces';
import config from '../config';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(user: JwtPayload) {
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 60000,
      accessToken,
    };
  }

  isTokenNotExpired(expTime: number) {
      return expTime * 1000 > Date.now();
  }

  async validateUser(payload: JwtPayload): Promise<any> {
        const { users } = config;
        const validUser = users.find((user) => user[payload.name] && user[payload.name] === payload.password);
        const isFreshToken = this.isTokenNotExpired(payload.exp);

        return validUser;
  }
}
