import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserAllComponent } from './pages/user-all/user-all.component';
import { UserNewComponent } from './pages/user-new/user-new.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAllComponent,
    UserNewComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
