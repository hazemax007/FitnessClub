import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-employee',
  templateUrl: './board-employee.component.html',
  styleUrls: ['./board-employee.component.css']
})
export class BoardEmployeeComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getEmployeeBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

}
