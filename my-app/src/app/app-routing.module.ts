import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomekComponent } from './homek/homek.component';

const routes: Routes = [

  {path:'',component:HomekComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
