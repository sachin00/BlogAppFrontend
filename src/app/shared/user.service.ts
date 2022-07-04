import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  blogs: Blog[]
  public isLoggedIn = new BehaviorSubject<boolean>(false);

  selectedUser: User = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem('authtoken');
    this.isLoggedIn.next(!!token);
  }

  registerUser(user: User)
  {
    this.isLoggedIn.next(true);
    return this.http.post(environment.apiBaseUrl+'/users/register',user);
  }

  loginUser(user: User)
  {
    return this.http.post(environment.apiBaseUrl+'/users/login',user);
  }

  getBlogs() {
    const headers = new HttpHeaders().set('x-auth-token',localStorage.getItem('authtoken'));
    return this.http.get(environment.apiBaseUrl+'/blogs/getblogs',{'headers': headers})
  }

  postBlog(title: string, description: string)
  {
    let formdata: FormData = new FormData();
    formdata.append('title', title);
    formdata.append('description', description);
    formdata.append('name',localStorage.getItem('username'));
    const headers = new HttpHeaders().set('x-auth-token',localStorage.getItem('authtoken'));
    return this.http.post(environment.apiBaseUrl+'/blogs/saveblog',formdata, {'headers': headers});
  }
}
