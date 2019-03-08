import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { ApiService } from "../service/api.service";
import { Naam } from "../service/naam";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, public api: ApiService) {}

  Api: ApiService;
  namen: Naam[];

  apiCall(): string {
    return '<li *ngFor="let naam of namen"> Name : {{ naam.firstName }} {{ naam.lastName }}</li>';
  }

  ngOnInit() {}

  onSubmit() {
    this.api.getNames().subscribe(data => (this.namen = data));
  }
}
