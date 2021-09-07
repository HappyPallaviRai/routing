import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CanCompDeactivate } from "./can-deactivate-guard.service";
import { Observable } from "rxjs/observable";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, CanCompDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  isEditallowed = false;
  isChanged = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.queryParams);
    console.log(this.route.fragment);
    this.route.queryParams.subscribe(
      (params: Params) =>
        (this.isEditallowed = params["allowEdit"] == "1" ? true : false)
    );
    this.route.fragment.subscribe();
    const idend = +this.route.params["id"];
    console.log(idend);
    this.server = this.serversService.getServer(+idend);
    this.route.params.subscribe(
      (params: Params) =>
        (this.server = this.serversService.getServer(+params["id"]))
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.isChanged = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  CanDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isEditallowed) return true;
    if (
      (this.server.name != this.serverName ||
        this.serverStatus != this.server.status) &&
      !this.isChanged
    ) {
      return confirm("are u sure want to leave?");
    } else {
      return true;
    }
  }
}
