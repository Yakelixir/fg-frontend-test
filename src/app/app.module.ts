import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { from } from 'rxjs';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    DepartmentsComponent,
    ProjectComponent,
    HeaderComponent,
    AddProjectComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
