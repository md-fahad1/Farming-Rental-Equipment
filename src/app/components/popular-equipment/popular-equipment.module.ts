import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularEquipmentComponent } from './popular-equipment.component';

@NgModule({
  declarations: [PopularEquipmentComponent],
  imports: [CommonModule],
  exports: [PopularEquipmentComponent] // this is fine
})
export class PopularEquipmentModule {}
