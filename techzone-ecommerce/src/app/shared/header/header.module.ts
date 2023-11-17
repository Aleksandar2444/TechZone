import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from '@@shared/material/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderRoutingModule, MaterialModule],
})
export class HeaderModule {}
