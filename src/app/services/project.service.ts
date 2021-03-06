import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from '../models/project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // projectsUrl:string = 'https://my-json-server.typicode.com/Yakelixir/fg-frontend-test/projects';
  projectsUrl:string = 'http://18.223.232.45:8080/api/v1/projects';
  projectsLimit = '?_limit=5';
  
  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    // Add a Limit by switching above and uncommenting this line
    // return this.http.get<Project[]>(`$(this.projectsUrl)$(this.projectsLimit)`);
    return this.http.get<Project[]>(this.projectsUrl);
  }
  
  // Delete Project
  deleteProject(project:Project):Observable<Project> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.delete<Project>(url, httpOptions);
  }

  // Add Project
  addProject(project:Project):Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions);
  }

  //Toggle Completed
  toggleCompleted(project: Project):Observable<any> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put(url, project, httpOptions)
  }
}