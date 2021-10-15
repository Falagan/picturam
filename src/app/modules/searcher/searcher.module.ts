import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ImageModule } from 'primeng/image';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { ResultsSearchComponent } from './components/results-search/results-search.component';
import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';

@NgModule({
  declarations: [SearcherComponent, MainSearchComponent, ResultsSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearcherRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ImageModule
  ]
})
export class SearcherModule {}
