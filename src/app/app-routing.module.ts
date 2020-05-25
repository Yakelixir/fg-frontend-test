import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component'
import { AboutComponent } from './components/pages/about/about.component';

// Add Routes
const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
