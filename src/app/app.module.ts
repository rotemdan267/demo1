import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { SomeEventsComponent } from './some-events/some-events.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserDetailsComponent,
    CopyrightComponent,
    SimpleButtonComponent,
    SomeEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
