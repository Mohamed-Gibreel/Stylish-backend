import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsEmail()
  email: String;
  @IsString()
  password: String;
}
