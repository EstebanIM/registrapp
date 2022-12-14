import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  usuario={
    username:'',
    password:''
  }


  constructor(private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit()
  {
    if(this.usuario.username=="esteban" && this.usuario.password=="123")
    {
      
      let navigationExtras:NavigationExtras={
        state:{
          miusuario:this.usuario,
          otracosa:'Bienvenido Esteban'
        }
      }
      this.router.navigate(['/home'],navigationExtras)

      console.log(navigationExtras);
    }
    else{
      this.presentAlert();
      console.log("Denegado");
    }
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario o Contraseña incorrectos',
      buttons: [
        {
          text: 'Reintentar',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ],
      backdropDismiss:false,
      cssClass:'miclase',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }



}