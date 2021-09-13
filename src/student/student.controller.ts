import { Controller , Get , Param , Put , Post, Body } from "@nestjs/common";
import { Student  } from "./dto/student.dto";

@Controller('students')
export class StudentController {
    @Get()
    getStudents(): Student[] {
        return [{ 'name' : "Hi" , "teacher" : 'me' }] ;
    }

    @Get(':studentId')
    getStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }

    @Post()
    createStudent(@Body() body: Student){
        console.log(body);
        return { "body" : JSON.stringify(body) } ;
    }

    @Put(':studentId')
    updateStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }
}

