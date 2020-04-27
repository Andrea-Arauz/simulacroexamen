import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

firebase.initializeApp({
  apiKey: "AIzaSyCmNASPfct0wLDuILI2WAhfK37Hx-bvjy4",
  authDomain: "proyectoactualizacion-b98b9.firebaseapp.com",
  databaseURL: "https://proyectoactualizacion-b98b9.firebaseio.com",
  projectId: "proyectoactualizacion-b98b9",
  storageBucket: "proyectoactualizacion-b98b9.appspot.com",
  messagingSenderId: "632407368422",
  appId: "1:632407368422:web:2959126cc45d475fce9127",
  measurementId: "G-4HEPQ1312M"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
