 export class User {
    nickName: string;
    email: string;
    IPAdress: string;

    constructor(nickName: string, email: string, IPAddress: string) {
        this.nickName = nickName;
        this.email = email;
        this.IPAdress = IPAddress;
    }
}

