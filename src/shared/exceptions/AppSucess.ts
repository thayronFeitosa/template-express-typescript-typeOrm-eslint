class AppSucess {
    public readonly message: string
    public readonly statusCode: number;

    constructor(message: any, statusCode = 400) { // eslint-disable-line
      this.message = message;
      this.statusCode = statusCode;
    }
}

export { AppSucess };
