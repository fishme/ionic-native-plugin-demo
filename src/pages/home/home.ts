import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public secureStorage: SecureStorage) {

  }

  storeKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.set('password', 'superman')
        .then(
          data => console.log(data),
          error => console.log(error)
        );
    });
  }

  getKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.get('password')
        .then(
          data => console.log(data),
          error => console.log(error)
        );
    });
  }

  removeKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.remove('password')
        .then(
          data => console.log(data),
          error => console.log(error)
        );
    });
  }


}
