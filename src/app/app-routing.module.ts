import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'signup', component:SignUpComponent
  },
  {
    path: '', redirectTo:'/signin', pathMatch: 'prefix'
  },
  {
    path: 'signin', component:SignInComponent
  },
  {
    path: 'blogs', component: BlogsComponent
  },
  {
    path: 'addblog', component: AddBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
