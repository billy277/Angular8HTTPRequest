import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  {path:'products', component: TokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
