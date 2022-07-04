import { Route } from "@angular/compiler/src/core";
import { Routes } from "@angular/router";
import { DisplayComponent } from "./display/display.component";

export const allAppRoutes: Routes = [{
    path: '', component: DisplayComponent
}];
