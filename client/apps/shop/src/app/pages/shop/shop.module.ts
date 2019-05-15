import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {MetaResolver} from '../../shared/resolvers/meta.resolver';
import {SharedModule} from '../../shared/shared.module';
import {ShopComponent} from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    MatInputModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        data: {
          meta: {
            title: 'Shop',
            description: 'ListComponent of the products in our shop'
          }
        },
        resolve: {
          meta: MetaResolver
        }
      }
    ])
  ]
})
export class ShopModule {}
