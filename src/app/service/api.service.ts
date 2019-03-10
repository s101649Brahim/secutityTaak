import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class ApiService {
  private ApiServiceURI: string = "https://securityserverap.herokuapp.com/";
  private contentHeaders: HttpHeaders;

  constructor(private http: HttpClient, public auth: AuthService) {
    this.contentHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  }

  public getNames(): Observable<string[]> {
    //**student code change start**
    let url = `${this.ApiServiceURI}/`;

    return this.http.get<string[]>(url, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
    //**student code change end**
  }
}
