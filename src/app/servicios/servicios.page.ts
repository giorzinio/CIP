import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {MatStepperModule, MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  tipo = {
    serv: 'edit',
    datos: 'disabled',
    pagar: 'disabled'
  }
  servicio: any;
  FecIni: any;
  FecFin: any;
  diffmon: any;
  isLinear = false;
  comprobante: any = 'b';
  constructor(public navCtrl:NavController) {  
    this.FecIni= new Date('2020-11-04T13:15:30Z').toISOString();
    this.FecFin= new Date('2020-11-04T13:15:30Z').toISOString();
    this.endDatos();
  }

  ngOnInit() {
  }
  customAlertOptions: any = {
    header: 'Seleccione la opción',
    translucent: true,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Confirmar',
        cssClass: 'primary',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  };
  goForward() {
    this.myStepper.next();
  }
  endServ(element) {
    if(this.servicio) {
      this.tipo.serv = 'complete';
      this.tipo.datos = 'edit';
      this.tipo.pagar = 'disabled';
    }
  }
  endDatos() {
    var months = (new Date(this.FecFin).getFullYear() - new Date(this.FecIni).getFullYear()) * 12;
    months -= new Date(this.FecIni).getMonth();
    months += new Date(this.FecFin).getMonth();
    this.diffmon = months <= 0 ? 1 : months;
    if(this.FecFin) {
      this.tipo.serv = 'complete';
      this.tipo.datos = 'complete';
      this.tipo.pagar = 'edit';
    }
  }
  editarTab(tipo) {
    if(tipo == 'serv') {
      this.tipo.serv = 'edit';
      this.tipo.datos = 'disabled';
      this.tipo.pagar = 'disabled';
    }
    if(tipo == 'datos') {
      this.tipo.serv = 'complete';
      this.tipo.datos = 'edit';
      this.tipo.pagar = 'disabled';
    }
  }
  next() {
    this.navCtrl.navigateForward(['visa']);
  }
}
