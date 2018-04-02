import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {SampleDataProvider} from "../../providers/sample-data/sample-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  footballTeams:any;
  constructor(public navCtrl: NavController,public sampleDataProvider:SampleDataProvider,public modalCtrl: ModalController) {

  }
ngOnInit(){
    this.footballTeams=this.sampleDataProvider.getData();
}
do( f)
{
  //alert(f.link);
  let profileModal = this.modalCtrl.create(FootballModal, { footballTeam: f });
  profileModal.present();
}
}






@Component({
  templateUrl: 'modal.html'
})


export class FootballModal {
  footballTeam:any;
  constructor(params: NavParams,private viewController:ViewController) {
    this.footballTeam= params.get('footballTeam');
  }
  closeModal() {

    this.viewController.dismiss();
  }

}
