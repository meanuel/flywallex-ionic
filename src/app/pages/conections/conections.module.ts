import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectionsPageRoutingModule } from './conections-routing.module';

import { ConectionsPage } from './conections.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectionsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConectionsPage]
})
export class ConectionsPageModule {}
