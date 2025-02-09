import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {QuizPage} from './pages/quiz/quiz.page';
import {CategoryPage} from './pages/categories/category.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'categories', component: CategoryPage},
  {path: 'quiz/:id', component: QuizPage},
];
