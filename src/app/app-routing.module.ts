
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'dashBoard',component:DashBoardComponent},
  {path:'products',component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
