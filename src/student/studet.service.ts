import { Injectable } from "@nestjs/common";
import { students } from "src/db";
import { Student } from "../student/dto/student.dto";


@Injectable()
export class StudentService {
    private students:Student[] = students;
    getStudents(): Student[] {
       return this.students;
    }

    getStudentById(id: number): Student  {
        console.log(id);
        console.log(this.students.find( (student) => { return student.id == id }));
        return this.students.find( (student) => { return student.id == id} )
    }

    createStudent( student:Student ) {

        const newStudent = {
            id : Math.floor(Math.random() *  9),
            ...student
        }
        this.students.push(newStudent);
        console.log(this.students);
        return newStudent;
    }
}