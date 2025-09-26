import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { NavigationEnd, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false,
})
export class HomeComponent {
  linkedInUrl?: string =
    'https://www.linkedin.com/in/abhinandan-sharma-533376125/';
  constructor() {}
}
