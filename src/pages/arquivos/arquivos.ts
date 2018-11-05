import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import { variable } from '@angular/compiler/src/output/output_ast';

@IonicPage()
@Component({
  selector: 'page-arquivos',
  templateUrl: 'arquivos.html',
})
export class ArquivosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController ) {
  }
  // Método para ver informações do form finalizado
  linkNaoDefinido(){
    console.log('testando');
  }

  public meusArquivos = {
    nome: "Lucas ",
    dataConsulta: "24/01/2018",
    notaAluno: '8.50'
  }
 
  enviadoComSucesso() {
    const toast = this.toastCtrl.create({
      message: 'Anamnese Enviado com sucesso',
      duration: 3000
    });
    toast.present();
  }

  confirmarEnvio() {
    const confirm = this.alertCtrl.create({
      title: 'Deseja mesmo enviar o arquivo?',
      message: 'Caso continue não será possível fazer alterações!',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Enviar',
          handler: () => {
            this.enviadoComSucesso();
          }
        }
      ]
    });
    confirm.present();
  }

  apagadoComSucesso() {
    const toast = this.toastCtrl.create({
      message: 'Anamnese apagado!',
      duration: 3000
    });
    toast.present();
  }
  apagarPaciente() {
    const confirm = this.alertCtrl.create({
      title: 'Formulario será excluido!',
      message: 'Não é possível reverter essa ação, deseja continuar?',
      buttons: [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          handler: () => {
            this.apagadoComSucesso();
          }
        }
      ]
    });
    confirm.present();
  }

}
