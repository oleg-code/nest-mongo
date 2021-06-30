import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersService {
  static findUser(): any {
    throw new Error('Method not implemented.');
  }
	constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

	/*@param id
	@param first_name
	@param last_name
	@param email
	@param gender
	@param ip_address*/


		
	async createOneUser( id: number, first_name: string, last_name: string, email: string, gender: string, ip_address: string ) {
		const newUser = new this.userModel({
			id,
			first_name,
			last_name,
			email,
			gender,
			ip_address
		});
		const result = await newUser.save();
		
	}

	/**
	 * Get All Users
	 */
	async getAllUsers() {
		const users = await this.userModel.find().exec();
		return users.map((user) => ({
			id: user.id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			gender: user.gender,
			ip_address: user.ip_address
		}));
	}


	async getOneUser(userId: string) {
		const user = await this.findUser(userId);
		return {
			id: user.id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			gender: user.gender,
			ip_address: user.ip_address
		};
	}

	/*async updateUser(
		id: user.id,
		name: user.name,
		surname: user.surname,
		email: user.email,
		gender: user.gender,
		ip_address: user.ip_address
	) {
		const modUser = await this.findUser(userId);

		//Only modify Values passed
		if (name) modUser.name = name;
		if (surname) modUser.surname = surname;
		if (email) modUser.surname = email;
		if (gender) modUser.surname = gender;
		if (ip_address) modUser.surname = ip_address;
		modUser.save();
	}*/

	async deleteUser(userId: string) {
		const result = await this.userModel.deleteOne({ _id: userId }).exec();
		if (result.n === 0) {
			throw new NotFoundException('Could not find user.');
		}
	}

	private async findUser(id: string): Promise<User> {
		let user: any;
		try {
			user = await this.userModel.findById(id).exec();
		} catch (error) {
			throw new NotFoundException('Could not find user.');
		}
		if (!user) {
			throw new NotFoundException('Could not find user.');
		}
		return user;
	}
}
