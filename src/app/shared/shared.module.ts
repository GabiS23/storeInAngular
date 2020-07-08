import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './../material/material.module';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { GroupProductPipe } from './pipes/groupProduct/group-product.pipe';
import { CartPipe } from './pipes/cartrepeat/cartrepeat.pipe';
// import { GroupProductsPipe } from './pipes/group-products.pipe';

@NgModule({
  declarations: [
    // ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    GroupProductPipe,
    CartPipe,
    // GroupProductsPipe,
  ],
  exports: [
    // ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
