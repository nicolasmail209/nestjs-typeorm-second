import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Profile } from './profiles/profile.entity';
import { Post } from './posts/post.entity';
import { PostsModule } from './posts/posts.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      //host: "localhost",
      //port: 3306,
      //username: "test",
      //password: "test",
      database: "database.db",
      synchronize: true,
      //logging: false,
      entities: [
        //"src/entity/**/*.ts"
        //__dirname + '/**/*.entity{.ts,.js}'
        User, Profile, Post
      ]
    }),
    UsersModule,
    PostsModule,
    ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
