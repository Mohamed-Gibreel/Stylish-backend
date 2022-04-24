import { Body, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  async helloWorld(dto: AuthDto): Promise<string> {
    console.log(dto);
    return 'Hello World!';
  }
}
