import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'add-users', loadChildren: './view/add-users/add-users.module#AddUsersPageModule' },
  { path: 'adicionar', loadChildren: './view/adicionar/adicionar.module#AdicionarPageModule' },
  { path: 'adicionar/:id', loadChildren: './view/adicionar/adicionar.module#AdicionarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
