import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

import { HeroModule } from '../hero/hero.module';
import { StatsModule } from '../stats/stats.module';
import { HowItWorksModule } from '../how-it-works/how-it-works.module';
import { WhyChooseUsModule } from '../why-choose-us/why-choose-us.module';
import { PopularEquipmentModule } from '../popular-equipment/popular-equipment.module';
import { TestimonialsModule } from '../testimonials/testimonials.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    HeroModule,
    StatsModule,
    PopularEquipmentModule,
    HowItWorksModule,
    WhyChooseUsModule,
    TestimonialsModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
