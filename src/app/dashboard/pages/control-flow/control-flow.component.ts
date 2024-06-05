import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showControl = signal(false); // .asReadonly();
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angula', 'Vue', 'Svelte', 'Quik', 'React']);

  public toggleContent() {
    this.showControl.update((value) => !value);
  }
}
