import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {
  story: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.story= "character";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

  ionViewWillEnter(){
    this.story = "character";
    
    }

}
