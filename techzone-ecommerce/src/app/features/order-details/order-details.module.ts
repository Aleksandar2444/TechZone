import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MaterialModule } from '@@shared/material/material/material.module';

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [CommonModule, OrderDetailsRoutingModule, MaterialModule],
  exports: [OrderDetailsComponent],
})
export class OrderDetailsModule {}
