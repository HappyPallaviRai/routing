import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/observable";
import { ServersService } from "../servers.service";
interface server {
  id;
  name;
  status;
}
export class ServerResolver implements Resolve<server> {
  constructor(private serverService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    status: RouterStateSnapshot
  ): Observable<server> | Promise<server> | server {
    return this.serverService.getServer(+route.params["id"]);
  }
}
