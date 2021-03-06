import { LoginUriApi } from './loginUriApi';

export class LoginApi {
    uris: LoginUriApi[];
    username: string;
    password: string;
    passwordRevisionDate: string;
    totp: string;

    constructor(data: any) {
        this.username = data.Username;
        this.password = data.Password;
        this.passwordRevisionDate = data.PasswordRevisionDate;
        this.totp = data.Totp;

        if (data.Uris) {
            this.uris = [];
            data.Uris.forEach((u: any) => {
                this.uris.push(new LoginUriApi(u));
            });
        }
    }
}
