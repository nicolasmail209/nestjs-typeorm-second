import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile, User]), UsersModule],//Sin User aca, no puedo crear el userRepository en ProfilesService
  controllers: [ProfilesController],
  providers: [ProfilesService]
})
export class ProfilesModule {}
