import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared';

/**
 * if the user is not loggin, when user visit root route, s/he will be redirected to `/bbs`
 * todo: more docs
 */
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  name: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService, private http: Http) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: {code: string, state: string}) => {
      const state = params.state;
      const code = params.code;
      if (!state && !code) {
        return this.router.navigate(['/bbs']);
      }
      if (decodeURIComponent(state) !== this.auth.csrfToken) {
        alert('安全码不匹配，请联系管理员！');
      } else {
        this.http.post('/api/github/user', {
          state: state,
          code: code,
          redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/bbs/user/home']))
        }).subscribe((data) => {
          this.name = data.json().name;
        }, (err) => {
          console.error(err);
        });
      }
    });
  }
}
