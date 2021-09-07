import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Data } from "@angular/router";

@Component({
  selector: "app-errors-page",
  templateUrl: "./errors-page.component.html",
  styleUrls: ["./errors-page.component.css"]
})
export class ErrorsPageComponent implements OnInit {
  errorMessage: string;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.data.subscribe(
      (data: Data) => (this.errorMessage = data["message"])
    );
  }
}
