import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slot',
  templateUrl: 'slot.html',
})
export class SlotPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.newMethod();
    
  }

  // newMethod() {
  //   function menu() {
  //     $(".menu-link").click(function (e) {
  //       e.preventDefault();
  //       $(".menu-overlay").toggleClass("open");
  //       $(".menu").toggleClass("open");
  //     });
  //   }
  //   ;
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotPage');
  }


  

 
}
