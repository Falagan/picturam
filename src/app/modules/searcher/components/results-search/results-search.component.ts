import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnSplashPhoto } from 'src/app/common/models/unsplash/unsplash-photo';
import { SearcherService } from '../../services/searcher.service';
import { SearchStateProps } from '../../services/searcher.state';

@Component({
  selector: 'app-results-search',
  templateUrl: './results-search.component.html',
  styleUrls: ['./results-search.component.css']
})
export class ResultsSearchComponent implements OnInit {
  public images$: Observable<UnSplashPhoto[]> | undefined;
  constructor(private searcherService: SearcherService) {}

  ngOnInit(): void {
    this.bindResults();
  }

  // BINDS

  private bindResults() {
    this.images$ = this.searcherService.bind$(SearchStateProps.RESULTS);
  }
}
