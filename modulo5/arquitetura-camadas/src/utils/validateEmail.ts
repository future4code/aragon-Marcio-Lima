export class validateEmail {
    public validateEmail = (email: string) => {
        let re = /\S+@\S+\.\S+/
        return re.test(email)
    }
}
