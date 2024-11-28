import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterOutlet, RouterLink, DashboardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
