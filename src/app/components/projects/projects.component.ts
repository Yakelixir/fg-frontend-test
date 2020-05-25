import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
    
  }

  // critical
  deleteProject(project:Project) {
    // Remove From UI
    this.projects = this.projects.filter(t => t.id !== project.id);
    // Remove from server
    this.projectService.deleteProject(project).subscribe();
  }

  // Add a proejct with the service class
  // subscribe to that and push it to the array
  addProject(project:Project) {
    this.projectService.addProject(project).subscribe(project => {
      this.projects.push(project);
    });
  }
}
