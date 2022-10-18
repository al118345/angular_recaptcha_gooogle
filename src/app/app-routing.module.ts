import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsincronoComponent} from "./components/asincrono/asincrono.component";
import {SincronoComponent} from "./components/sincrono/sincrono.component";

const routes: Routes = [
  { path: 'sincrono', component: SincronoComponent },
  { path: 'asincrono', component: AsincronoComponent },
  { path: '**',  component: SincronoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
