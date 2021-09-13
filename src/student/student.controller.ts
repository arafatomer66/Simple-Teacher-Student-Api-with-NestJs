import { Controller , Get , Param , Put , Post, Body } from "@nestjs/common";
import { json } from "stream/consumers";

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

    @Post()
    createStudent(@Body() body) {
        console.log(body);
        return { "body" : JSON.stringify(body) } ;
    }

    @Put(':studentId')
    updateStudentById(@Param('studentId') id: string) {
        return { 'your id is' : `${id}` } ;
    }
}

