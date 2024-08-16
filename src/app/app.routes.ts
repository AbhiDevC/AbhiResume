import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'skills', component: SkillsComponent },

        { path: '**', redirectTo: '/home' }
      
];
 
