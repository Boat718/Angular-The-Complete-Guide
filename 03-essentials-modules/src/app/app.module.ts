import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { sharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    UserComponent, 
  ],
  imports: [BrowserModule,sharedModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}