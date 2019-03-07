import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Naam } from "./naam";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class ApiService {
  private ApiServiceURI: string = "http://localhost:4000";
  private contentHeaders: HttpHeaders;

  constructor(private http: HttpClient, public auth: AuthService) {
    this.contentHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  }

  public getNames(): Observable<Naam[]> {
    let url = `${this.ApiServiceURI}/`;

    return this.http.get<Naam[]>(url, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
}
