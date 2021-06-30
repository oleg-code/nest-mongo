import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({	
	id: { type: Number },
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	gender: { type: String },
	ip_address: { type: String },
},
{ versionKey: '_somethingElse' });


export interface User extends mongoose.Document {
	id: number,
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string
}