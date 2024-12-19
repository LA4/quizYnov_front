import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
