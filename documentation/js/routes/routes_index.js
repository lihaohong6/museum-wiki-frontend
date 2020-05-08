var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"museum-list","component":"MuseumListComponent"},{"path":"search","component":"SearchComponent"},{"path":"search/:searchCategory/:searchText","component":"SearchInCategoryComponent"},{"path":"about","component":"AboutComponent"},{"path":"view/:viewCategory/:id","component":"ViewComponent"},{"path":"create/:category","component":"CreateComponent","canActivate":["LoginGuardService"]},{"path":"create/:category/:museumId","component":"CreateComponent","canActivate":["LoginGuardService"]},{"path":"edit/:category/:id","component":"EditComponent","canActivate":["LoginGuardService"]},{"path":"view-edit/:editId","component":"ViewEditComponent"},{"path":"login","component":"LoginComponent"},{"path":"user-profile","component":"UserProfileComponent","canActivate":["LoginGuardService"]},{"path":"register","component":"RegistrationComponent"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}