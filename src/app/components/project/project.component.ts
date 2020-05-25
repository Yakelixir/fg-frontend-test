import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../../services/project.service';

import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() deleteProject: EventEmitter<Project> = new EventEmitter();

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      project: true,
      'is-active': this.project.active
    }

    return classes;
  }

  onToggle(project) {
    // Toogle in the UI
    project.active = !project.active;
    console.log('toggle')
    // Toogle on server
    
    this.projectService.toggleCompleted(project).subscribe(project =>
      console.log(project));
  }
  onDelete(project) {
    this.deleteProject.emit(project);
  }
  
}
