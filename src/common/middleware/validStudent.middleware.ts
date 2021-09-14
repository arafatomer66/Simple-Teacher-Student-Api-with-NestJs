import { Injectable, NestMiddleware ,HttpException} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class ValidStudentMiddle implements NestMiddleware {
    use(reg: Request, res: Response, next: NextFunction) {
        const studentId = reg.params.studentId;
        console.log(studentId);

        if(studentId == null) {
            throw new HttpException("Its null" , 400);
        }
        next()
    }
}