import { TransitInsurancePage } from './transitinsurance';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TransitInsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(TransitInsurancePage),
  ],
  exports: [
    TransitInsurancePage
  ]
})

export class TransitInsurancePageModule { }
