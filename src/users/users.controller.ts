import {
	Controller,
	Post,
	Body,
	Get,
	Param,
	Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Post()
	async createOneUser(
		@Body('id') id: number,
		@Body('first_name') first_name: string,
		@Body('last_name') last_name: string,
		@Body('email') email: string,
		@Body('gender') gender: string,
		@Body('ip_address') ip_address: string,
	) {
		const generatedId = await this.usersService.createOneUser(
			id,
			first_name,
			last_name,
			email,
			gender,
			ip_address
		);
		return { id: generatedId };
	}

	@Get()
	getAllUsers() {
		return this.usersService.getAllUsers();
	}

	@Get(':id')
	getOneUser(@Param('id') userId: string) {
		return this.usersService.getOneUser(userId);
	}

	@Delete(':id')
	deleteUser(@Param('id') userId: string) {
		this.usersService.deleteUser(userId);
		return null;
	}
}


