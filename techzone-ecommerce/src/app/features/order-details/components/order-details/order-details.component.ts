import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '@@shared/services/graphql.service';
import { OrderDetailsResponse } from '@@shared/gql-models/graphql';
import { BaseComponent } from '@@shared/base-component/base.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent extends BaseComponent implements OnInit {
  orderDetailsData: any;
  orderDetailsRes: OrderDetailsResponse['activeOrder'] | null = null;

  constructor(private readonly graphqlService: GraphqlService) {
    super();
  }

  ngOnInit(): void {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    this.graphqlService
      .getOrderDetails()
      .pipe(
        takeUntil(this.destroy$),
        tap((result: OrderDetailsResponse) => {
          this.orderDetailsData = result.activeOrder;
        })
      )
      .subscribe();
  }
}
