import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillsComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume';
  constructor(private router: Router) {} 

}
