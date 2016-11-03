import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NoteDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html'
})
export class NoteDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NoteDetail Page');
  }

}
