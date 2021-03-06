import {
        Request,
        Response,
        NextFunction
    } from 'express'
    
    export const defaultErrorHandler = (
        error: any,
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        console.log(error.message);
        let statusCode: number = 200,
            message: string = ''
        switch (error.message) {
            case "NEED_PASSWORD":
                statusCode = 400
                message = "请提供密码"
    
        }
        response.status(statusCode).send({
            message
        })
    }
    