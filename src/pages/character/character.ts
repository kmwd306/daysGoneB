import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SlotPage } from '../slot/slot';
import { RoulettePage } from '../roulette/roulette';

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

    goToRoulettePage() {
      this.navCtrl.push(RoulettePage);
    }
}
