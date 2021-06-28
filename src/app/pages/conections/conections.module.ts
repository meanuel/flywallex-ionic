import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectionsPageRoutingModule } from './conections-routing.module';

import { ConectionsPage } from './conections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectionsPageRoutingModule
  ],
  declarations: [ConectionsPage]
})
export class ConectionsPageModule {}
