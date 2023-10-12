import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full', },
  {
    path: 'Home',
    loadChildren: () =>
      import('./modules/Home/home.module').then(
        (m) => m.HomeModule
      )
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
