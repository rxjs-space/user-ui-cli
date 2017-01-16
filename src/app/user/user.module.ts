import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';

/**
 * todo: doc
 */
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserLoginComponent, UserHomeComponent]
})
export class UserModule { }
