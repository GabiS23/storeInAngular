import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Pipe({
  name: 'groupProduct'
})
export class GroupProductPipe implements PipeTransform {
  product: Product[];

  constructor(private cartService: CartService) {
  }

  transform(product: any, args?: any): any {
    var total = 0;
    this.cartService.cart$.subscribe(products => {
      products.forEach((elemento) => {
        if (elemento.id === product.id) {
          total += 1;
        }
      });
    });
    return total;
  }

}
