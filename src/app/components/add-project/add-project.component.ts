import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  // Same as delete : any due to no id since its not related to model
  @Output() addProject: EventEmitter<any> = new EventEmitter();

  name:string;

  constructor() { }

  ngOnInit() {
  }

  // Creates the Id for you
  onSubmit() {
    const project = {
      name: this.name,
      active: false
    }

    this.addProject.emit(project);
  }

}
