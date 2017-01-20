import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiService } from '../shared/api';

@Injectable()
export class LibraryRoutingGuardService implements CanActivate {

  constructor(private api: ApiService, private router: Router) { }

  /**
   * if the url is something like '/library/xyz' and 'xyz' is not in apisArr
   * will not activate
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let canActivate;
    const urlParts = state.url.split('/');
    if (urlParts[1] === 'library' && (this.api.apisArr.indexOf(urlParts[2]) === -1)) {
      console.log('no go');
      this.router.navigate(['/404']);
      canActivate = false;
    } else {
      canActivate = true;
    }
    return canActivate;
  }
}


