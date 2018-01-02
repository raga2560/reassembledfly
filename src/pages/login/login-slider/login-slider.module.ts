import { LoginSliderPage } from './login-slider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Auth } from '../../../providers/auth.passport';
// import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    LoginSliderPage,
  ],
  imports: [
    //IonicStorageModule,
    IonicPageModule.forChild(LoginSliderPage),
  ],
  exports: [
    LoginSliderPage
  ],
  providers: [Auth]
})

export class LoginSliderPageModule { }
