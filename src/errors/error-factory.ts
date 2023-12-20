// eslint-disable-next-line max-classes-per-file
import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiErrorFactory {
    static createHttpException(
        code: string,
        message: string,
        status: HttpStatus,
    ): HttpException {
        const errorResponse = {
            code,
            message,
        };
        return new HttpException(errorResponse, status);
    }

    static createErrorClass(
        code: string,
        status: HttpStatus,
        defaultMessage: string,
    ): new (...args: any[]) => HttpException {
        return class CustomError extends HttpException {
            constructor(...args: any[]) {
                const formattedMessage = defaultMessage.replace(/%s/g, () =>
                    args.shift(),
                );
                super({ code, message: formattedMessage }, status);
            }
        };
    }
}
