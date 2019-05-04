import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload, JwtResult } from '../types/interfaces';
import config from '../config';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(user: JwtPayload) {
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 60000,
      accessToken,
    };
  }

  validateUser(payload: JwtPayload): boolean {
        const { users } = config;
        const validUser = users.find((user) => user[payload.name] && user[payload.name] === payload.password);
        return !!validUser;
  }

  login(user: JwtPayload): JwtResult | UnauthorizedException {
      const isUserValid = this.validateUser(user);

      if (!isUserValid) {
            throw new UnauthorizedException();
      }

      return this.createToken(user);
  }
}
