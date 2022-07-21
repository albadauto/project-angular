import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = "José Adauto"
  userData = {
    email: "ti.albarraz@gmail.com",
    role: "admin"
  }

  title = 'angular-project';
}
