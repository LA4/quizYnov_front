import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {QuizPage} from './pages/quiz/quiz.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'quiz/:id', component: QuizPage},
];
