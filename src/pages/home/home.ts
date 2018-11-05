import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NovoPage } from '../novo/novo';
import { ArquivosPage } from '../arquivos/arquivos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController)
              {  }
  
  irParaNovo() {
    this.navCtrl.setRoot(NovoPage);
  }

  irParaArquivos(){
    this.navCtrl.setRoot(ArquivosPage);
  }

  // Aviso do tutorial incompleto
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Ainda estamos preparando o tutorial para você, caso tenha alguma dúvida procure seu supervisor!',
      buttons: ['OK']
    });
    alert.present();
  }


}
