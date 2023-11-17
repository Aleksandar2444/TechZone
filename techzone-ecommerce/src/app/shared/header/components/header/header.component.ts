import { Component } from '@angular/core';
import { GraphqlService } from '@@shared/services/graphql.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly graphqlService: GraphqlService) {}

  login() {
    this.graphqlService.loginQuery().subscribe();
  }
}
