import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RoutingModule } from "./app-routes.module";
import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorsPageComponent } from "./errors-page/errors-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorsPageComponent
  ],
  imports: [BrowserModule, FormsModule, RoutingModule],
  providers: [
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
