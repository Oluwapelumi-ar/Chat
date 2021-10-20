export class ChatMessageDot {
    user:String = '';
    message: String = '';

    constructor(user: string,message:string) {
        this.user = user;
        this.message = message;
    }
}