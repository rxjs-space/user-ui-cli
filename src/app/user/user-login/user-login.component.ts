import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared';

/**
 * todo: implement github OAuth login logic and doc it
 */
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
