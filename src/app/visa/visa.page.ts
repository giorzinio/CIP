import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.page.html',
  styleUrls: ['./visa.page.scss'],
})
export class VisaPage implements OnInit {

  tarjeta = {
    Nombre: '',
    Numero: 0,
    ccv: 0,
    mexp: '',
    aexp:''
  };
  constructor(public navCtrl:NavController, public alertController: AlertController) { 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje de Confirmación',
      message: 'Se realizo el pago correctamente',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.navigateRoot('/tabs/eventos');
        }
      }]
    });

    await alert.present();
  }
  getDate() {
    var dmes = new Date(this.tarjeta.mexp),
    month = '' + (dmes.getMonth() + 1),
    daño = new Date(this.tarjeta.aexp),
    year = daño.getFullYear();
        if (month.length < 2) 
        month = '0' + month;       

    return [month, year].join('/');
  }
  ngOnInit() {
  }

}
