import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  title: string;
  desc: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  postBlog() {
    this.userService.postBlog(this.title, this.desc).subscribe(
      res => {
        this.router.navigate(['/blogs'])
      },
      err => {
        console.log(err);
      }
    );
  }

}
