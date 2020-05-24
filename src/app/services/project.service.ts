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
  projectsUrl:string = 'https://my-json-server.typicode.com/Yakelixir/fg-frontend-test/projects';
  projectsLimit = '?_limit=5'
  
  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    // return this.http.get<Project[]>(`$(this.projectsUrl)$(this.projectsLimit)`);
    return this.http.get<Project[]>(this.projectsUrl);
  }
  
  //Toggle Completed
  toggleCompleted(project: Project):Observable<any> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put(url, project, httpOptions)
  }
}