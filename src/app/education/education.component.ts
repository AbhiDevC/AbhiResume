import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  trainings = [
    {
      title: "Master's in Computer Science",
      institution: 'Carleton University',
      description:
        'Studied advanced topics in computer science including AI, machine learning, and software engineering.',
      year: '2018 - 2020',
      image: 'assets/images/Carleton.png',
    },
    {
      title: "Bachelor's in Computer Science",
      institution: 'Punjab Technical University',
      description:
        'Focused on foundational computer science topics like algorithms, data structures, and software development.',
      year: '2014 - 2018',
      image: 'assets/images/PTU.png',
    },
    // Add more training entries here
  ];
}
