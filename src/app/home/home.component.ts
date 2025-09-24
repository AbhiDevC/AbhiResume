import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { NavigationEnd, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
}
