import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent {
  @Output() textToSearch = new EventEmitter();
  public inputValue: string = ``;

  constructor() {}

  // SEARCHS

  searchOnClickButton(event: any) {
    const text = event.target.value;
    this.textToSearch.emit(text);
  }

  searchOnPressEnter() {
    this.textToSearch.emit(this.inputValue);
  }
}
