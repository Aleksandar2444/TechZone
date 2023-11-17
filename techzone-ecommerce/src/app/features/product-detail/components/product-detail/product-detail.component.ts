import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GraphqlService } from '@@shared/services/graphql.service';
import { Product } from '@@features/product-listings/models/product';
import { BaseComponent } from '@@shared/base-component/base.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent extends BaseComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly graphqlService: GraphqlService,
    private readonly router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.fetchProductDetails();
  }

  private fetchProductDetails() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.graphqlService
        .getProductById(productId)
        .pipe(
          takeUntil(this.destroy$),
          tap((productDetailsResponse) => {
            this.product = productDetailsResponse.product;
          })
        )
        .subscribe();
    }
  }

  addToOrder(product: Product) {
    this.graphqlService
      .addToOrder(product.id)
      .pipe(
        takeUntil(this.destroy$),
        tap((result) => {
          this.graphqlService.getOrderDetails().subscribe();

          this.router.navigate(['/order-details']);
        })
      )
      .subscribe();
  }
}
