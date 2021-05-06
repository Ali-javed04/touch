import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const config = {
  apiKey: "AIzaSyD-EPZr5q1dVrS4YLUNhEJwl2W1HtP80BA",
  authDomain: "intouch-db66c.firebaseapp.com",
  projectId: "intouch-db66c",
  storageBucket: "intouch-db66c.appspot.com",
  messagingSenderId: "257997388436",
  appId: "1:257997388436:web:c2dbbd4479a33877ca9281",
  measurementId: "G-4M84DWF1VG"
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage,
    ToastrModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
