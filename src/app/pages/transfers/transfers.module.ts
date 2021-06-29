import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransfersPageRoutingModule } from './transfers-routing.module';

import { TransfersPage } from './transfers.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TransfersPage]
})
export class TransfersPageModule {}
