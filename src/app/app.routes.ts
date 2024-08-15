import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
   
        { path: '', component: HomeComponent },
        { path: 'skills', component: SkillsComponent },
      
];
 
