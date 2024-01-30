import { Component } from '@angular/core';
import { AllstudentService } from 'src/app/Service/allstudent.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent {

  public students:any =[]
 constructor (private allStudentService: AllstudentService){

  allStudentService.getallstudent().subscribe(
    (data)=>{
    this.students = data;
    },
    (err)=>{
      alert("Internal Service Error");
    }
  )

}




}
