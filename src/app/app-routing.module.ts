import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectOneComponent } from './components/projects/project-one/project-one.component';

const routes: Routes = [
  { path: '', component: HomeComponent },           
  { path: 'services', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/projectone', component: ProjectOneComponent },
  { path: '**', component: NotfoundComponent, pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
