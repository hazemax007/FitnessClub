import { User } from './../_models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  //content?: string;
  listUser:User[]
  public editUser: User;
  public deleteUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /*this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });*/
    this.retrieveAllUsers()
  }

  retrieveAllUsers(): void{
    this.userService.retrieveAllUsers()
    .subscribe(
      data=>{
      this.listUser=data
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form')!.click();
    this.userService.addUser(addForm.value).subscribe(
      (data: User) => {
        console.log(data);
        this.retrieveAllUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(user: User , id:any): void {
    this.userService.updateUser(user , id).subscribe(
      (data: User) => {
        console.log(data);
        this.retrieveAllUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(id: any): void {
    this.userService.deleteUser(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(user: User, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container!.appendChild(button);
    button.click();
  }
}
