import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingsRoutingModule } from './product-listings-routing.module';
import { MaterialModule } from '@@shared/material/material/material.module';
import { ProductListingsComponent } from './components/product-listings/product-listings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListingsComponent],
  imports: [
    CommonModule,
    ProductListingsRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [ProductListingsComponent],
})
export class ProductListingsModule {}
