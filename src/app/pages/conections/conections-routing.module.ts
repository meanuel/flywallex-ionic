import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectionsPage } from './conections.page';

const routes: Routes = [
  {
    path: '',
    component: ConectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConectionsPageRoutingModule {}
