import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {QuizPage} from './pages/quiz/quiz.page';
import {CategoryPage} from './pages/categories/category.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('./pages/login/login.component')).LoginComponent
  },
  {
    path: 'categories',
    loadComponent: async () => (await import('./pages/categories/category.page')).CategoryPage
  },
  {path: 'quiz/:id', loadComponent: async () => (await import('./pages/quiz/quiz.page')).QuizPage},
];
