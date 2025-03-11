export class AuthModel
{
    email: string;
    password: string;
    name?:string;
    phoneNumber? : string;
    address? : string;

    constructor(data: Partial<AuthModel> = {}) {
        this.email = data.email || '';
        this.password = data.password || '';
        this.name = data.name || null;
        this.phoneNumber = data.phoneNumber || null;
        this.address = data.address || null;
    }
}