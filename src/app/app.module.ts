import { Module } from '@nestjs/common';
import { StudentController } from "../student/student.controller";
import { StudentService } from "../student/studet.service";;
import { TeacherController } from "../teacher/teacher.controller";
import { StudentTeacherController } from "../teacher/student.controller";
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [StudentModule],
  controllers :[TeacherController,StudentTeacherController],
  providers : []
})
export class AppModule {}
