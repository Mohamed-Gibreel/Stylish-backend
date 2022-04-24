import { AuthService } from './auth.service';
import { Body, Controller, Get } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get()
  async helloWorld(@Body() dto: AuthDto): Promise<string> {
    return await this.service.helloWorld(dto);
  }
}
