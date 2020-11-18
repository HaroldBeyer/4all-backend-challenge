export class HttpReturn {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        this.message = message;
        this.statusCode = statusCode;
    }
}