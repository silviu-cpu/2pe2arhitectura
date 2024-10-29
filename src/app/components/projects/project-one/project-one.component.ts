import { Component } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss'],
})
export class ProjectOneComponent {
  photos = [
    { src: './../../../assets/projectone.jpg', alt: 'Project Image 1' },
    { src: './../../../assets/projectone2.png', alt: 'Project Image 2' },
    { src: './../../../assets/projectone3.jpg', alt: 'Project Image 3' },
    { src: './../../../assets/projectone4.jpg', alt: 'Project Image 4' },
    { src: './../../../assets/projectone5.jpg', alt: 'Project Image 5' }
  ];
}
