import { Controller , Get , Param , Put } from "@nestjs/common";

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return { 'message' : "Hi" } ;
    }

    @Get(':studentId')
    getStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }

    @Put(':studentId')
    updateStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }
}

