import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('https://localhost:7036/api/users').subscribe(
      {
        next: response => this.users = response,
        error: error => console.log(error),
        complete: () => console.log("Reauest has completed")
      }
    )
  }

  cancelRegisterMode(event: any) {
    this.registerMode = false;
  }


}
