import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ExperianceComponent } from './experiance/experiance.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillsComponent,HeaderComponent,ProjectComponent,ExperianceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AshifProfile';
}
