export interface User {
	token: string;
	id?: number;
	userName?: string;
	avatar?: string;
}

export interface UserData {
	firstName: string;
	lastName: string;
	avatar: string;	
}
export interface UserSchema {
	authData?: User;
	userData?: UserData;
}