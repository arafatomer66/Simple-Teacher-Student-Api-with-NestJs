import { Module } from "@nestjs/common";
import { StudentService } from "./studet.service";
import { StudentController } from "./student.controller";

@Module({
    imports: [],
    controllers :[StudentController],
    providers : [StudentService],
    exports: [StudentService]
})
export class StudentModule {

}