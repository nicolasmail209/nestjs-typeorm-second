import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { CreateProfileDto } from '../profiles/dto/create-profile.dto';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { Profile } from './profile.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(Profile) private profileRepository:
        Repository<Profile>,
        @InjectRepository(User) private userRepository:
        Repository<User>,
        
        private usersService: UsersService
    ) {}

    async createProfile(id: number, profile: CreateProfileDto){
        //const userFound = await this.usersService.getUser(id);
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        })
        //this.usersService.
        //console.log(userFound);

        if (!userFound) {
            console.log("en el if");
        return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const newProfile = this.profileRepository.create(profile);
        //console.log(newProfile);
        //return this.profileRepository.save(newProfile)
        const savedProfile = await this.profileRepository.save(newProfile);
        userFound.profile = savedProfile;

        return this.userRepository.save(userFound)
    }
    
    getPosts(){
        //return this.postsRepository.find()
        return this.profileRepository.find({
            relations: ['author']
        })
    }
}
