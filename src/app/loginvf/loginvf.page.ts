import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../providers/api/api.service';
import { AuthService } from '../providers/auth/auth.service';

@Component({
  selector: 'app-loginvf',
  templateUrl: './loginvf.page.html',
  styleUrls: ['./loginvf.page.scss'],
})
export class LoginvfPage implements OnInit {
  user: any;
  uno: '';
  dos: '';
  tres: '';
  cuatro: '';
  cinco: '';
  seis: '';

  constructor(public navCtrl:NavController, public api: ApiService, public auth: AuthService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.user) {
        this.user = JSON.parse(params.user);
        console.log(this.user);
      }
    });
  }

  ngOnInit() {
  }
  ingresar() {
    var codverif = this.uno + this.dos + this.tres + this.cuatro + this.cinco + this.seis;
    this.api.getDataWithParms('/api/Values',{ Opcion: 7,ncodcol: this.user.ncodcol, codverif: codverif,Procedure: "mobileProcedure" })
    .then(data => { 
      if(data) {
        this.user = JSON.parse(data.toString())[0];
        this.auth.storeUserCredentials(this.user);
        this.navCtrl.navigateRoot('tabs');
      }
    });
    
  }
  gotoNextField(element, nextElement) {
    if(parseInt(element.value)) {
      nextElement.focus();
    }
  }
  
}
