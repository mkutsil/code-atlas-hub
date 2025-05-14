export interface User {
	token: string;
	id: string;
	userName: string;
	avatar: string;
	role: string
}

export interface UserSchema {
	authData?: User;
}