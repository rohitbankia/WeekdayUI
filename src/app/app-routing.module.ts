import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './components/edit.component'
import { DisplayComponent } from './components/display.component';

const routes: Routes = [
  {path: '', redirectTo:'/display', pathMatch:'full'},
  {path: 'display', component: DisplayComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
