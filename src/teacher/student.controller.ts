import { Controller , Get , Param , Put } from "@nestjs/common";

@Controller('/:teacherId/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(@Param('teacherId') id: string) {
        return { 'your id is' : `${id}` } ;
    }

    @Put(':studentId')
    updateStudentTeacher(@Param('teacherId') id: string) {
        return { 'your st id is' : `${id}` } ;
    }
}
