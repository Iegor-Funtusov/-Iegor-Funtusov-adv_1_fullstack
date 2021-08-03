import { Component, OnInit } from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  });

  constructor(private _userHttpService: UserHttpService, private _router: Router) { }

  ngOnInit(): void { }

  create(): void {
    this._userHttpService.createUser(this.userForm.value).subscribe(() => {
      this._router.navigateByUrl('users');
    });
  }
}
