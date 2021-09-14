import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { StudentService } from "./studet.service";
import { StudentController } from "./student.controller";
import { ValidStudentMiddle } from "src/common/middleware/validStudent.middleware";

@Module({
    imports: [],
    controllers :[StudentController],
    providers : [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer : MiddlewareConsumer) {
       consumer.apply(ValidStudentMiddle).forRoutes(
           {
               path : "students/:studentId",
               method : RequestMethod.GET
           }
       );
    }

}