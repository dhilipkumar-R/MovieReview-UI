import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TitleScreenComponent} from './title-screen/title-screen.component';
import {NoAccessComponent} from './no-access/no-access.component';
import {LoginComponent} from './login/login.component';
import {MyReviewsComponent} from './my-reviews/my-reviews.component';
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: '',
  component: LoginComponent
},
// {
//   path: 'title/:id',
//   loadChildren: './title-screen/title-screen.module#TitleModule'
// },
{
  path: 'title/:id',
  component: TitleScreenComponent
}, {
  path: 'reviews',
  component: MyReviewsComponent
},
{
  path: '**',
  component: NoAccessComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
