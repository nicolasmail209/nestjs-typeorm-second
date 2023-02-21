import { Controller, Post, Get, Patch, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
//import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { ProfilesService } from './profiles.service';
import { User } from '../users/user.entity';
//import { UsersService } from './users.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) { }

    @Post(':id/profile')
    createProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() profile: CreateProfileDto
    ) {
        return this.profilesService.createProfile(id, profile)
    }

    //@Get()
    //getUsers(): Promise<User[]> {
    //    return this.profilesService.getUsers();
    //}

    //@Get(':id')
    //getUser(@Param('id', ParseIntPipe) id: number)/* : Promise<User> */ {
    //    return this.profilesService.getUser(id);
    //}

    //@Delete(':id')
    //deleteUser(@Param('id', ParseIntPipe) id: number) {
    //    return this.profilesService.deleteUser(id);
    //}

    //@Patch(':id')
    //updateUser(@Param('id', ParseIntPipe) id: number,
    //    @Body() user: UpdateUserDto) {
    //    return this.profilesService.updateUser(id, user)
    //}



}
