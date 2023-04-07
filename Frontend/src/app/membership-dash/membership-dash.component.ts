import { MembershipService } from './../_services/membership.service';
import { Membership } from './../_models/Membership';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-membership-dash',
  templateUrl: './membership-dash.component.html',
  styleUrls: ['./membership-dash.component.css']
})
export class MembershipDASHComponent implements OnInit {

  listMembership : any
  deleteMembership : Membership
  editMembership : Membership

  constructor(private membershipService:MembershipService) { }

  ngOnInit(): void {
    this.retrieveAllMemberships()
  }

  retrieveAllMemberships(): void{
    this.membershipService.retrieveAllMemberships()
    .subscribe(
      data=>{
      this.listMembership=data
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddMembership(addForm: NgForm): void {
    document.getElementById('add-membership-form')!.click();
    this.membershipService.addMembership(addForm.value).subscribe(
      (data: Membership) => {
        console.log(data);
        this.retrieveAllMemberships();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateMembership(membership: Membership , id:any): void {
    this.membershipService.updateMembership(membership , id).subscribe(
      (data: Membership) => {
        console.log(data);
        this.retrieveAllMemberships();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMembership(id: any): void {
    this.membershipService.deleteMembership(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllMemberships();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(membership: Membership, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMembershipModal');
    }
    if (mode === 'edit') {
      this.editMembership = membership;
      button.setAttribute('data-target', '#updateMembershipModal');
    }
    if (mode === 'delete') {
      this.deleteMembership = membership;
      button.setAttribute('data-target', '#deleteMembershipModal');
    }
    container!.appendChild(button);
    button.click();
  }

}
