import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  title = 'resume';
  stu:any={
    projects:[]
  }
  tempproj={};

  datafill(e:any){
    this.stu={...this.stu,[e.target.name]:e.target.value}
  }

  mackproj(e:any){
    this.tempproj={...this.tempproj,[e.target.name]:e.target.value}
    console.log(this.tempproj);

  }
  addproject(){
    this.stu.projects.push(this.tempproj);
  }
}
