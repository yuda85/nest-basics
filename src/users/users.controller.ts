import { Body, Controller, Get, Post, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/creatre-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('/signup')
    craateUser(@Body() body: CreateUserDto) {
        console.log(body)
        this.usersService.create(body.email, body.password)
    } 

    @Get('/:id')
    find(@Param('id') id: string) {
        const user = this.usersService.findOne(parseInt(id))
        if(!user) {
            throw new NotFoundException('user not found')
        }
        return user
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
       return this.usersService.find(email)
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        this.usersService.remove(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body)
    }

    

}
