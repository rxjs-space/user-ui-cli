import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

/**
 * base class for components which are able to reload contents on params change 
 * without destroying and recreating the component itself
 */
export abstract class BasePageComponent {
  protected activatedRouteSubscription: Subscription;

  constructor(protected activatedRoute: ActivatedRoute) {}

  /**
   * `reloadInit()` need to be called in the `ngOnInit` method of the derived components.
   * `reloadInit`'s logic is not put in the `ngOnInit` of this base class, because derived components
   * can easily overwrite the `ngOnInit` of base class.
   */
  protected reloadInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params) => {
      // console.log(params);
      this.reload(params);
    });
  }

  /**
   * reload logic will put in `reload` method of the derived components
   */
  protected abstract reload(params: Params): void;
}
