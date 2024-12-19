import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, DashboardComponent, MenuComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
