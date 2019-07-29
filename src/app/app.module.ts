import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// third party plugins or module should be import here.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// costmize modules
import { LoginModule } from './login/login.module';
import { InboxModule } from './inbox/inbox.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    InboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
