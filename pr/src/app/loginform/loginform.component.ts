import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
 privet_fb = inject(FormBuilder)
 privet_router = inject(Router)

 loginform = this.privet_fb.group({
    email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required]]
 })
 onsubmit(){
    
  localStorage.getItem('email')
  localStorage.getItem('password')

}


}


