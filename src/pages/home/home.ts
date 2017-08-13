import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public secureStorage: SecureStorage,
    private imagePicker: ImagePicker
  ) {

  }

  /**
   * Secure storage: store key
   */
  storeKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.set('password', 'superman')
        .then(
          data => console.log('set secure storage', data),
          error => console.log(error)
        );
    });
  }

  /**
   * Secure storage: return key
   */
  getKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.get('password')
        .then(
          data => console.log('get secure storage', data),
          error => console.log(error)
        );
    });
  }

  /**
   * Secure storage: remove key
   */
  removeKey() {
    this.secureStorage.create('alps-storage').then((storage: SecureStorageObject) => {
      storage.remove('password')
        .then(
          data => console.log('remove secure storage', data),
          error => console.log(error)
        );
    });
  }


  getImages() {
    this.imagePicker.getPictures({maximumImagesCount : 2}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

}
