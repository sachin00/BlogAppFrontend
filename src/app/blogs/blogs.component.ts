import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('authtoken'))
    console.log(this.userService.isLoggedIn.value)
    this.getBlogsList();
  }

  getBlogsList() {
    this.userService.getBlogs().subscribe(
      res => {
        console.log(res);
        this.userService.blogs = res as Blog[];
      },
      err => {
        console.log(err)
      }
    )
  }
}
