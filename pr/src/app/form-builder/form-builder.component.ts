import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule,NgIf ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {
  private _fb=inject(FormBuilder)

  userform=this._fb.group({
  username:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  password:['',[Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,")]],
  contact:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
  spi:['',[Validators.required,Validators.min(0),Validators.max(10)]]

  })
}
