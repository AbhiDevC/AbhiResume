import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillsComponent,RouterLink, RouterLinkActive, CommonModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume';
  isMobile: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  toggleSidenav(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
