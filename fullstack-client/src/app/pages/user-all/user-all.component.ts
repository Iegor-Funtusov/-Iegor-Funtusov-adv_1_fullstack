import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../models/user.model';
import { UserHttpService } from '../../services/user-http.service';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {

  users: UserModel[] | undefined;

  constructor(private _userHttpService: UserHttpService, private _router: Router) { }

  ngOnInit(): void {
    this._loadAllUsers();
  }

  deleteUserById(id: number): void {
    this._userHttpService.deleteUserById(id).subscribe(() => {
      window.location.reload();
    });
  }

  loadUserById(id: number): void {
    this._router.navigateByUrl('users/' + id);
  }

  private _loadAllUsers(): void {
    this._userHttpService.loadAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
