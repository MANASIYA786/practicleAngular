import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  
 privet_fb = inject(FormBuilder)
 privet_router = inject(Router)

 singUpForm = this.privet_fb.group({
  username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required]],
    contact:['',[Validators.required,Validators.pattern("[0-9]{10}")]]
 })
  onsubmit(){
    
    localStorage.setItem('email',this.singUpForm.value.email!)
    localStorage.setItem('password',this.singUpForm.value.password!)

}
}
