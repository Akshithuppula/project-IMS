import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public loginForm: FormGroup= new FormGroup({

    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  });

constructor(private loginService:LoginService, private router:Router) {}

login(){
  this.loginService.dologin(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login Success");
      this.router.navigateByUrl("/dashboard")
      localStorage.setItem('token',data.token);
    },
    (err:any)=>{
      alert("Login Failed");
    }
  )
}

}
