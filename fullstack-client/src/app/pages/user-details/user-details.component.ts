import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../models/user.model';
import { UserHttpService } from '../../services/user-http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private _id: number | undefined;
  user: UserModel | undefined;

  constructor(private _route: ActivatedRoute, private _userHttpService: UserHttpService) { }

  ngOnInit(): void {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._userHttpService.loadUserById(this._id).subscribe(user => {
      this.user = user;
    });
  }
}
