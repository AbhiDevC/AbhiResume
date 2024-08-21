import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedSkill: string = 'programming'; // Default skill to display

  selectSkill(skill: string) {
    this.selectedSkill = skill;
  }
  isSkillSelected(skill: string): boolean {
    return this.selectedSkill === skill;
  }
}
