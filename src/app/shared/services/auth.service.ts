import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

/**
 * todo: doc
 */
@Injectable()
export class AuthService {
  code: string;
  constructor() {
    if (!this.csrfToken) {
      this.nextCsrfToken();
    }
  }

  get csrfToken(): string {
    return sessionStorage.getItem('csrfToken');
  }

  set csrfToken(value: string) {
    sessionStorage.setItem('csrfToken', value);
  }

  nextCsrfToken(): void {
    this.csrfToken = uuid.v4();
  }
}
