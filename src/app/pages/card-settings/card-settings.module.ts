import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSettingsPageRoutingModule } from './card-settings-routing.module';

import { CardSettingsPage } from './card-settings.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSettingsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardSettingsPage]
})
export class CardSettingsPageModule {}
