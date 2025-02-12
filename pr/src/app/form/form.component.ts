import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(){}

  stuForm = new FormGroup({
    stuName: new FormControl('',Validators.required),
    stuEmail:new FormControl('',[Validators.required,Validators.email]),
    stuContact: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")])
  })


}
