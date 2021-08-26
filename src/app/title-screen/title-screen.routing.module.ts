import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TitleScreenComponent } from './title-screen.component';

const titleRoutes: Routes = [
  {
    path: 'title/:id',
    component: TitleScreenComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(titleRoutes)
  ]
})
export class TitleRoutingModule { }
