import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ValidationComponent } from './validation/validation.component';
import { FormComponent } from './form/form.component';
import { FormBuilder } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { IncrementComponent } from './increment/increment.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
    {path:'resume',component:ResumeComponent},
    {path:'validation',component:ValidationComponent},
    {path:'reactiveValidation',component:FormComponent},
    {path:'FormBuilder',component:FormBuilderComponent},
    {path:'increment',component:IncrementComponent},
    {path:'loginform',component:LoginformComponent},
    {path:'signup',component:SignupComponent}

];
