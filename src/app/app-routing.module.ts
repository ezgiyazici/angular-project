import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path:"home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"user/:id",
    component:UserDetailComponent
  },
  
  {
    path:"data-binding",
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
