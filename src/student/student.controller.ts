import { Controller , Get , Param , Put , Post, Body } from "@nestjs/common";
import { Student  } from "./dto/student.dto";
import { StudentService } from "./studet.service";

@Controller('students')
export class StudentController {

    constructor(private studentData: StudentService) {}

    @Get()
    getStudents(): Student[] {
        return this.studentData.getStudents();
    }

    @Get(':studentId')
    getStudentById(@Param('studentId') id: number) {
        return this.studentData.getStudentById(id);
    }

    @Post()
    createStudent(@Body() body: Student){
        console.log(this.studentData.createStudent(body));
        return  this.studentData.createStudent(body);
    }

    @Put(':studentId')
    updateStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }
}

