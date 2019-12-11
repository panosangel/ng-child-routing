import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      {path: '**', redirectTo: 'client'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
