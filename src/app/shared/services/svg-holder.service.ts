import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class SvgHolderService {
  holder = new BehaviorSubject(null);
  constructor() { }

}
