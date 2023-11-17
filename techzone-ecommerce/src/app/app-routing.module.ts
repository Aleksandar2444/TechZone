import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'product-detail/:id',
    loadChildren: () =>
      import('./features/product-detail/product-detail.module').then(
        (module) => module.ProductDetailModule
      ),
  },
  {
    path: 'product-listings',
    loadChildren: () =>
      import('./features/product-listings/product-listings.module').then(
        (module) => module.ProductListingsModule
      ),
  },
  {
    path: 'order-details',
    loadChildren: () =>
      import('./features/order-details/order-details.module').then(
        (module) => module.OrderDetailsModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
