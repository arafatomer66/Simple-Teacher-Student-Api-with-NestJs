import { Controller , Get , Param , Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return { 'message' : "Hi" } ;
    }

    @Get(':teacherId')
    getTeachersById(@Param('teacherId') id: string) {
        return { 'your id is' : `${id}` } ;
    }
}
