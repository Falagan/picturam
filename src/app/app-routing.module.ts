import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './config/app-routes';

const routes: Routes = [
  {
    path: AppRoutes.SEARCHER,
    loadChildren: () => import('../app/modules/searcher/searcher.module').then(m => m.SearcherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
