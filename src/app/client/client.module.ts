import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientTemplateComponent } from './client-template/client-template.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostFullComponent } from './post-full/post-full.component';

@NgModule({
  declarations: [
    ClientTemplateComponent,
    HomePageComponent,
    PostFullComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
