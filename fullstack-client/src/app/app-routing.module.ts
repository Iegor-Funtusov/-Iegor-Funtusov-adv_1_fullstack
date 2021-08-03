import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserAllComponent } from './pages/user-all/user-all.component';
import { UserNewComponent } from './pages/user-new/user-new.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'users', component: UserAllComponent
  },
  {
    path: 'users/:id', component: UserDetailsComponent
  },
  {
    path: 'users-new', component: UserNewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
