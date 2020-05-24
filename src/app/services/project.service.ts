import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getProjects() {
    return [
      {
        id: 1,
        name: 'Founders Game',
        description: 'A project to help people share value',
        idea_id: 1,
        active: true
      },
      {
        id: 2,
        name: 'Whyz Owl',
        description: 'A project to help people find the right team',
        idea_id: 2,
        active: false
      },
      {
        id: 3,
        name: 'Tech Into Growth',
        description: 'A project to help people build now that they have sharing and the right team',
        idea_id: 3,
        active: false
      }
    ]
  }
  
}
