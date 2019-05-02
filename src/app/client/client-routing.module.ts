import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTemplateComponent } from './client-template/client-template.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostFullComponent } from './post-full/post-full.component';

const routes: Routes = [
  {
    path: '',
    component: ClientTemplateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'blog',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'blog/:id',
        component: PostFullComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {
}
