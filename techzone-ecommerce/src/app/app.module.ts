import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailModule } from '@@features/product-detail/product-detail.module';
import { ProductListingsModule } from '@@features/product-listings/product-listings.module';
import { OrderDetailsModule } from '@@features/order-details/order-details.module';
import { HeaderModule } from '@@shared/header/header.module';
import { HeaderComponent } from '@@shared/header/components/header/header.component';
import { MaterialModule } from '@@shared/material/material/material.module';
import { HomeModule } from '@@features/home/home.module';
import { GraphQLModule } from './graphql.module';
import { FormsModule } from '@angular/forms';
import { productListingReducer } from '@@shared/store/product.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ProductDetailModule,
    ProductListingsModule,
    OrderDetailsModule,
    HeaderModule,
    MaterialModule,
    HomeModule,
    StoreModule.forRoot({
      productListing: productListingReducer,
    }),
    EffectsModule.forRoot([]),
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
