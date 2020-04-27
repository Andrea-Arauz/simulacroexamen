import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  calificacion: number;
  nombre: string;
  precio: number;
  tipo:string;

  ngOnInit() {
  }
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
  }
  addTodo() {
    firebase.firestore().collection("videojuegos").add({
      calificacion: this.calificacion,
      nombre: this.nombre,
      precio: this.precio,
      tipo: this.tipo
    }).then((docRef) => {
      this.toastCtrl.create({
        message: "PlayGame has been added!",
        duration: 2000
      }).then((toast) => {
        toast.present();
        this.navCtrl.back();
      })
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })

  }


}
