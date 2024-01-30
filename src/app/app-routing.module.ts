import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AllStudentComponent } from './Component/all-student/all-student.component';
import { CreatestudentComponent } from './Component/createstudent/createstudent.component';


const routes: Routes = [

  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent,children:[
    {path: 'allstudent', component:AllStudentComponent},
    {path:'createstudent', component: CreatestudentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
