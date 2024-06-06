import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  // @ViewChild('txtTagInput')
  // public tagInput!: ElementRef<HTMLInputElement>;

  // constructor() {}

  // searchTag() {
  //   const newTag = this.tagInput.nativeElement.value;
  //   console.log(newTag);
  // }
}
