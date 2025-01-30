
import { Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent }
];