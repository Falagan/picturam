import { Component, OnInit } from '@angular/core';
import { SearcherService } from './services/searcher.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  constructor(private searcherService: SearcherService) {}

  ngOnInit(): void {}

  onSearch(text: string) {
    console.log(text)
    this.searcherService.searhPhotos(text);
  }
}
