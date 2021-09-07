import { Routes, RouterModule, RouterLink } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorsPageComponent } from "./errors-page/errors-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }]
  },
  {
    path: "servers",
    component: ServersComponent,
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver }
      }
    ]
  },
  { path: "servers/users", component: UsersComponent },
  // { path: "not-found", component: NotFoundComponent },
  {
    path: "not-found",
    component: ErrorsPageComponent,
    data: { message: "not work" }
  },
  { path: "**", redirectTo: "not-found" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  // imports: [RouterModule.forRoot(appRoutes), { usehash: true }],
  exports: [RouterModule]
})
export class RoutingModule {}
