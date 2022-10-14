import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsincronoComponent} from "./app/components/asincrono/asincrono.component";
import {SincronoComponent} from "./app/components/sincrono/sincrono.component";

const routes: Routes = [
  { path: 'sincrona', component: SincronoComponent },
  { path: 'asincrona', component: AsincronoComponent },
  { path: '**',  component: SincronoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
