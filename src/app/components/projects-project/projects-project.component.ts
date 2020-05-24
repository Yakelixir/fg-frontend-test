import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects-project',
  templateUrl: './projects-project.component.html',
  styleUrls: ['./projects-project.component.css']
})
export class ProjectsProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
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
    project.active = !project.active;
    console.log('toggle');
  }
  onDelete(project) {
    console.log('delete');
  }
}
