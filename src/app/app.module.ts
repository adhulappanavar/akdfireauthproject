import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';

import { routes } from './app.routes';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAY8keH2Dab2dU66yMFQCLOCeyWiPd8mSY",
    authDomain: "anilauthproject.firebaseapp.com",
    databaseURL: "https://anilauthproject.firebaseio.com",
    storageBucket: "anilauthproject.appspot.com",
    messagingSenderId: "607517651410"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
