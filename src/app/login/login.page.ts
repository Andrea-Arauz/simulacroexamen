import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  loading: any;

  constructor(
    private toastCtrl: ToastController, 
    private navCtrl: NavController,
    private google:GooglePlus,
    public loadingController: LoadingController,   
    ) {

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.navCtrl.navigateForward(['/home']);
      } else {
        // No user is logged in
      }
    })

  }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async presentLoading(loading) {
    await loading.present();
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userObject) => {

      console.log(userObject);
      // Navigate the user to the application page

      this.navCtrl.navigateForward(['/home']);

    }).catch((err) => {

      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).then((toast) => {
        toast.present();
      })

    });
  }
  
 async loginGoogle(){
  let params;
  this.google.login(params)
  .then((response) => {
    const { idToken, accessToken } = response
    this.onLoginSuccess(idToken, accessToken);
  }).catch((error) => {
    console.log(error)
    alert('error:' + JSON.stringify(error))
  });
}
  onLoginSuccess(accessToken, accessSecret) {
  const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
          .credential(accessToken);
  firebase.auth().signInWithCredential(credential)
    .then((response) => {
      this.navCtrl.navigateForward(['/home']);
      this.loading.dismiss();
    })

  }
  onLoginError(err) {
  console.log(err);

 }
  gotoSignup() {
    this.navCtrl.navigateForward(['/signup']);
  }

}
