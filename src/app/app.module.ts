import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { ROUTES } from "./app.routes";

import { AuthService } from "./auth/auth.service";
import { CallbackComponent } from "./callback/callback.component";
import { OAuthModule } from "angular-oauth2-oidc-codeflow-pkce";
import { ApiService } from "./service/api.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    OAuthModule.forRoot()
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
