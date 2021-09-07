import { Observable } from "rxjs/observable";
import {
  CanDeactivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

export interface CanCompDeactivate {
  CanDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanCompDeactivate> {
  canDeactivate(
    comp: CanCompDeactivate,
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return comp.CanDeactivate();
  }
}
