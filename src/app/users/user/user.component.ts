import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramSubs: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    };
    this.paramSubs = this.route.params.subscribe((param: Params) => {
      this.user.id = param["id"];
      this.user.name = param["name"];
    });
  }
  ngOnDestroy() {
    this.paramSubs.unsubscribe();
  }
}
