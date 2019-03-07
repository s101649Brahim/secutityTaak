import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CallbackComponent } from "./callback/callback.component";
import { Sandbox } from "./sandbox/sandbox";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "callback", component: CallbackComponent },
  { path: "**", redirectTo: "" },
  { path: "sandbox", component: Sandbox }
];
