import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./sandbox.html",
  styleUrls: []
})
export class Sandbox {
  public getDateTime() {
    return Date.now();
  }
}
