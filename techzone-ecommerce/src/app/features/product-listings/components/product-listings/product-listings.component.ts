import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '@@shared/services/graphql.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { BaseComponent } from '@@shared/base-component/base.component';
import { takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { setFilterText } from '@@shared/store/product.actions';
import { getFilterText } from '@@shared/store/product.selectors';
import { SortOrder } from '@@shared/gql-queries/graphql-queries';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListingsComponent extends BaseComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedSort: string = 'name';
  filterText: string = '';
  currentPage: number = 0;
  pageSize: number = 10;
  totalProducts: number = 0;

  constructor(
    private readonly graphqlService: GraphqlService,
    private readonly router: Router,
    private readonly store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.fetchProducts();

    this.store.select(getFilterText).subscribe((filterText) => {
      //* Update component state or perform actions based on the filter text
      this.filterText = filterText;
    });
  }

  //* orderBy & skipNumber should come from the store
  private fetchProducts(skip: number = 0) {
    this.graphqlService
      .getProducts({
        orderBy: SortOrder.ASC,
        skipNumber: skip,
      })
      .pipe(
        takeUntil(this.destroy$),
        tap((productResponse: any) => {
          //* Add the already existing ones and the newly ones
          this.products = [...this.products, ...productResponse.products.items];
          console.log('PRODUCTS', productResponse.products.items);
          //* Initialize filteredProducts
          this.filteredProducts = [...this.products];

          this.totalProducts = this.filteredProducts.length;

          this.filterProducts();
        })
      )
      .subscribe();
  }

  goToProductDetail(productId: string) {
    this.router.navigate(['/product-detail', productId]);
  }

  filterProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.filteredProducts = this.products
      .filter((product) =>
        product.name.toLowerCase().includes(this.filterText.toLowerCase())
      )
      .slice(startIndex, endIndex);

    this.store.dispatch(setFilterText({ filterText: this.filterText }));
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    console.log(event);

    const remaining = event.length - event.pageSize * event.pageIndex;
    console.log(remaining);
    const isLast = remaining === event.pageSize;

    console.log('is last', isLast);

    if (isLast) {
      console.log('event length', event.length);
      this.fetchProducts(event.length);
    }
    this.filterProducts();
  }

  onSearchChange() {
    this.filterProducts();
  }
}
