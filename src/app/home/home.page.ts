import { Component } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videojuegos: any[] = [];

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { 
    this.getTodos();
  }

  ngOnInit() {
  }

  getTodos() {
    firebase.firestore().collection("videojuegos")
    .onSnapshot((querySnapshot) => {
      this.videojuegos = querySnapshot.docs;
    });
  }
}
