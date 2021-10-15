import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';


@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    SearcherRoutingModule
  ]
})
export class SearcherModule { }
