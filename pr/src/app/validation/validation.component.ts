import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-validation',
  imports: [FormsModule,NgIf],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
user:any={
  username:'',
  email:'',
  age:'',
  password:'',
  spi:''  
}
}
