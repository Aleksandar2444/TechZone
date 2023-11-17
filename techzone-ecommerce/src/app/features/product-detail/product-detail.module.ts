import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '@@shared/material/material/material.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, MaterialModule],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
