import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, public api: ApiService) {}

  //**student code change start**
  Api: ApiService;
  namen = [];

  apiCall() {
    this.api.getNames().subscribe(data => (this.namen = data));
  }
  //**student code change end**

  ngOnInit() {}

  onSubmit() {}
}
